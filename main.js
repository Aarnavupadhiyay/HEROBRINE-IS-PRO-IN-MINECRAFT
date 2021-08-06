var song=""
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
function preload()
{
song = loadSound('music.mp3');
}

function setup() {
  canvas = createCanvas(500, 500);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoded)
  poseNet.on("pose", gotposes)
  }
  function modelLoded()
  {
console.log("ModelLoded IS LODED")
  }

  function draw()
{
image(video, 0, 0, 500, 500);
}

function play()
{
song.play();
song.volume(1);
song.rate(1)
}

function gotposes(results)
{
if(result.length > 0)
{

console.log(results)

leftWristX = results[0].pose.leftWrist.X;
leftWristY = results[0].pose.leftWrist.Y;

rightWristX = results[0].pose.rightWrist.X;
rightWristY = results[0].pose.rightWrist.Y;

console.log(leftWristX);
console.log(leftWristY);
console.log(rightWristX);
console.log(rightWristY);
}
}