Webcam.set({
    width : 350,
    height : 300,
    img_format: 'png',
    png_quality: 90,
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ssNBZZbdy/model.json', modelLoaded);

function modelLoaded()
{
    console.log("model Loaded");
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data_1 = "the first prediction is "+prediction_1;
    speak_data_2 = "and the seccond prediction is " +prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);
}
