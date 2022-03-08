leftEarX=0;
rightEarX=0;
leftEarY=0;
rightEarY=0;
noseX=0;
noseY=0;

function preload() {
    Lips=loadImage('https://i.postimg.cc/Jz7jyyY3/5-57900-lip-clip-art-transparent-background-lips-png-png-removebg-preview.png');
    RightEar=loadImage('https://i.postimg.cc/NGKKz35c/EFH19-WHITE-GOLD-1.png');
    LeftEar=loadImage('https://i.postimg.cc/NGKKz35c/EFH19-WHITE-GOLD-1.png');
}

function setup() {
    canvas=createCanvas(350, 350);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(350, 350);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function draw() {
    image(video, 0, 0, 350, 350);
    image(Lips, noseX-24, noseY+25, 50, 30);
    image(RightEar, rightEarX+100, leftEarX-100, rightEarY-50, leftEarY-50, 50, 50);
    image(LeftEar, rightEarX+100, leftEarX+100, rightEarY+50, leftEarY+50, 50, 50);
}

function take_snapshot() {
    save('myFilterImage.png');
}

function modelLoaded(results){
    console.log('Model is Installed')
}

function gotPoses(results) {
    if(results.length>0){
        console.log(results);
        leftEarX=results[0].pose.leftEar.x;
        rightEarX=results[0].pose.rightEar.x;
        leftEarY=results[0].pose.leftEar.y;
        rightEarY=results[0].pose.rightEar.y;
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("Lear x = "+ results[0].pose.leftEar.x);
        console.log("Rear x = "+ results[0].pose.rightEar.x);
        console.log("Lear y = "+ results[0].pose.leftEar.y);
        console.log("Rear y = "+ results[0].pose.rightEar.y);
        console.log("nose x = "+ results[0].pose.nose.x);
        console.log("nose y = "+ results[0].pose.nose.y);
    }
}