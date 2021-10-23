var prediction = ""

Webcam.set({
    width:330,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("result");
console.log("attach_webcam")
Webcam.attach("#camera");

function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='captured_image' src='" + data_uri + "'>";
    });
}

console.log(ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/UcL0M7Dm_/model.json",modelLoaded)

function modelLoaded(){
    console.log("model is loaded");
}

function speak()
{
    speech = window.speechSynthesis;
    speak_data = "The prediction is " + prediction;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    speech.speak(utterThis);
}

speak();