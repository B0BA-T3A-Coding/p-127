thefeels="";
darkxfile="";

function preload()
{
    thefeels=loadSound("TheFeels(Instrumental).mp3")
    darkxfile=loadSound("Dark(X-File)Instrumental.mp3")
    
}

function setup()
{
canvas=createCanvas(600,500)
canvas.center();

video=createCapture(VIDEO);
video.hide();
}


function draw()
{
image(video, 0, 0, 600, 500)
}