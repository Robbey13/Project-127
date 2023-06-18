Song1 ="";
Song2 ="";



function setup(){
    canvas = createCanvas(600,330);
    canvas.center();

    video =createCapture(VIDEO);
    video.hide();
}

function preload() {
    Song1 = loadSound("music.mp3");   
    Song2 = loadsound("music2.mp3");
}

function draw ()
{
    Image(video,0,0,600,330);
}