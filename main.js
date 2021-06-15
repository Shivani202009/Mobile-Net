Webcam.set({
    height:300,
    width:300,
    img_format:"png",
    png_quality:90,
    constraints:{
        facingMode:"environment"
    }

}
    
)
Webcam.attach("camera")