#import cv2
import numpy as np
import pywt
import pywt.data
import matplotlib.image as mpimg
import matplotlib.pyplot as plt
from scipy import ndimage
import json
import glob
path=glob.glob(r"C:\Users\HP\Desktop\MBD S3\Analysis Mining and Indexing multimedia\Projet 2\coil-100\*.png")
coefs_list=[]
var_dict={}
for filepath in path:
    var_list=[]
    mean_list=[]
    #print(filepath)
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
    var_dict={"path":filepath.split("coil-100/",1)[1],"var_list":var_list}    
    with open('var_json.json', 'a') as fp:
        json.dump(var_dict, fp)
        fp.write(',')
    


