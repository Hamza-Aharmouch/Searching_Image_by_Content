from flask import Flask,render_template,request,redirect,url_for,jsonify
import numpy as np
from operator import itemgetter
import pywt
import pywt.data
import matplotlib.image as mpimg
import matplotlib.pyplot as plt
from scipy import ndimage
import json
import glob
import os
app = Flask(__name__)

@app.route("/")
def hello_world():
    return render_template("home.html")

  
app.config["UPLOAD_PATH"]="/Users/HP/Desktop/MBD/S3_MBD/ImageProcessing_ComputerVision/CBIR/cbir_env/static/coil_cbir"
@app.route("/upload_file",methods=["POST","GET"])
def upload_file():
    if request.method=="POST":
        f=request.files["image"]
        f.save(os.path.join(app.config["UPLOAD_PATH"],f.filename))
        print(f.filename)
        return redirect(url_for("calculate_var",filename=f.filename))
    return render_template("home.html",filename=f.filename)
    

#####
@app.route('/api/getdata',methods=['POST'])
def getdata():
    if request.method=="POST":
    #data = request.get_json()
    #filename=data['data']
    #print("waaaaaa",filename) 
         f=request.files["image"]
         f.save(os.path.join(app.config["UPLOAD_PATH"],f.filename))
         filesname=calculate_var(f.filename)
    return jsonify(data=filesname)

    #return "oleee "+f.filename
    #filesname=calculate_var(filename)
    #return jsonify(data=filesname)
#####
# Calcul de la distance eucledieene
def eucl_dist(l1,l2):
    l1_arr=np.array(l1)
    l2_arr=np.array(l2)
    dist = np.linalg.norm(l1_arr - l2_arr)
    return dist


def calculate_var(filename):
    var_list=[]
    filepath=f"/Users/HP/Desktop/MBD/S3_MBD/ImageProcessing_ComputerVision/CBIR/cbir_env/static/coil_cbir/{filename}"
    img=mpimg.imread(filepath)
    #Multiple level DWT
    coeffs2=pywt.wavedec2(img,'db5',mode='periodization',level=2)
    #Get coefficients
    cA2=coeffs2[0]
    (cH1,cV1,cD1)=coeffs2[-1]
    (cH2,cV2,cD2)=coeffs2[-2]
    coefs_list=[cH1,cV1,cD1,cA2,cH2,cV2,cD2]
    for coef in coefs_list:
        variance = ndimage.variance(coef)
        var_list.append(variance)
    for coef in coefs_list:    
        labels,labels_num=ndimage.label(coef)
        mean=ndimage.mean(coef,labels)
        var_list.append(mean)
    #convert json file to dict
    with open('var_json.json') as vj:
        distances={}
        list_vj = json.load(vj)
        for d_vj in list_vj:
            eucl_distance=eucl_dist(var_list,d_vj["var_list"])
            path_vj=d_vj["path"]
            distances[path_vj]=eucl_distance
        #print(distances)
        k=12   
        mindist4 = dict(sorted(distances.items(), key = itemgetter(1))[:k])
        #print(mindist4)
        filenames_1=list(mindist4.keys())
        string = 'coil-100/'
        filenames = list(map(lambda orig_string: string+orig_string, filenames_1))
 
    #return f"The list is : {var_list}"
    return filenames
    




if __name__== "__main__":
    app.run(debug=True)
    

   