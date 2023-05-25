mustacheX=0;
mustacheY=0;

function preload(){
mustache = loadImage('https://i.postimg.cc/L5DBHf1P/th-3.jpg');
}

function setup(){
canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
console.log('Posenet Is Intialized')
}

function draw(){
image(video,0,0,300,300);
image(mustache, mustacheX,mustacheY, 60,20);
}
function take_snapshot(){
save('myFilterIMage.png')
}

function gotPoses(results){
if(results.length>0){
console.log(results);
console.log("nose x:"+results[0].pose.nose.x);
mustacheX = results[0].pose.nose.x-30;
console.log("nose y:"+results[0].pose.nose.y);
mustacheY = results[0].pose.nose.y;
}
}