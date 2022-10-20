function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('MobileNet', modelLoaded);
}
function modelLoaded(){
  console.log("modelLoaded");
}
function draw() {
  image(video, 0, 0, 300, 300);
  classifier.classify(video, gotResult);
}
var presult='';
function gotResult(error, results) {
  if (error) { console.log(error); }

  
  else {

    if((results[0].confidence>0.5) && (presult !=results[0].label))
    console.log(results);
    presult=results[0].label;
    var synth=window.SpeechSynthesis;
    speakData=results[0].label;
    var utterThis=new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis); 
    document.getElementById("result_object_name").innerHTML=result[0].label;
    document.getElementById("result_object_accuracy").innerHTML=result[0].confidence.toFixd(3);

  }
}





