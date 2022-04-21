from flask import Flask, render_template, redirect, url_for, request

import cv2
import os

STATIC_FOLDER = './static'

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('input.html')

@app.route("/upload-image", methods=["GET", "POST"])
def upload_image():
    if request.method == 'POST':
        if request.files:            
            # Lecture des paramètres 
            image = request.files["image"]
            imageName = image.filename
            image.save(os.path.join(STATIC_FOLDER, imageName))            
            
            # Lecture et traitement
            imagePath = os.path.join(STATIC_FOLDER, imageName)
            img = cv2.imread(imagePath)
            gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
            cnt = cv2.Canny(gray,240,300,5)
            
            # Sauvegarde du résultat                   
            cv2.imwrite(os.path.join(STATIC_FOLDER, "cnt_"+imageName), cnt)

            return redirect(url_for('output',name=imageName))
            
    else :
        return redirect(url_for('/'))

@app.route('/output')
def output():
    
    local_url1= './static/'+request.args.get('name')
    local_url2= './static/'+"cnt_"+request.args.get('name')
    return render_template('output.html',url1 = local_url1, url2 = local_url2)

if __name__ == '__main__':
   app.run()