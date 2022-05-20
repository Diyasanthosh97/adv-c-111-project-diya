prediction1="";
prediction2="";

Webcam.set({
    width:300,
    heigth:300,
    image_format:"jpeg",
    jpeg_quality:100
});
camera=document.getElementById("camera");
Webcam.attach("#camera");

function takePic(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_img" src="'+data_uri+'"/>';
    });
}
console.log("ml5version:",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/wE9Upr5Dn/model.json",modelLoaded
);
function modelLoaded(){
    console.log("modelLoaded");
}
function speak(){
    var synth=window.speechSynthesis;
    speak1="You seem to be"+prediction1;
    speak2="If not , you seem to be"+prediction2;
    var utterThis=new SpeechSynthesisUtterance(speak1+speak2);
    synth.speak(utterThis);

}
function check(){
    img=document.getElementById("capture_img");
    classifier.classify(img,gotResults);
}