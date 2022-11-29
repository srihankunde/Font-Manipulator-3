leftwristx=0;
rightwristx=0;
difference=0;



function setup(){

    video= createCapture(VIDEO);
  video.size(550,500);

  canvas= createCanvas(550,550);
  canvas.position(560,150);
   posenet=ml5.poseNet(video,modelLoaded);
   posenet.on('pose', gotposes);



}

function modelLoaded(){
    console.log("posenet is loaded!");

}

function gotposes(results){

    if(results.length > 0){


        console.log(results);
         leftwristx= results[0].pose.leftWrist.x;
        rightwristx= results[0].pose.rightWrist.x;
        difference= floor(leftwristx - rightwristx);
        console.log("leftwristx= "+leftwristx+", rightwristx= "+rightwristx+", difference ="+difference);


    }

}

function draw(){
    background("red");

    document.getElementById("font_size").innerHTML="Font size of the text = "+difference+"px";
    textSize(difference);
    fill("yellow");
    text("Srihan",50,400);
}