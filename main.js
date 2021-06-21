var SpeechRecognition = window.webkitSpeechRecognition;
time = 5000
var recognition = new SpeechRecognition();
camera = document.getElementById("webcam");

function blah(input) {
    time = input * 1000
}
function start()
{
    
    document.getElementById("textbox").innerHTML = ""; 
    recognition.start();
    
} 
 
recognition.onresult = function(event) {

 console.log(event); 

var Content = event.results[0][0].transcript;
console.log(Content)

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
      if(Content == "take my selfie" || Content == "Take my selfie" || Content == "Take a selfie" || Content == "take a selfie")
      {
        console.log("taking selfie --- ");
        speak();
      }
}


function speak(){
    var synth = window.speechSynthesis;

    speak_data = "Taking your Selfie in"+ time/1000+" seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    spoke = synth.speak(utterThis);
    console.log(spoke)
    Webcam.attach(camera);
    setTimeout(function()
    { 
        take_snapshot(); 

        save();
    }, time);
}

 

Webcam.set({
    width:375,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
        document.getElementById('link').hidden = false
    });
}


function save()
{
  link = document.getElementById("link");
  image = document.getElementById("selfie_image").src ;
  link.href = image;
  
}
