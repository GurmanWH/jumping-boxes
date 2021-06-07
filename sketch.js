var canvas;
var music;
var surface1;
var surface2;
var surface3;
var surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1=createSprite(0,580,360,30);
    surface1.shapeColor="yellow"
    surface2=createSprite(295,580,200,30);
    surface2.shapeColor="pink"
    surface3=createSprite(515,580,200,30);
    surface3.shapeColor="orange"
    surface4=createSprite(740,580,220,30);
    surface4.shapeColor="blue"

    //create box sprite and give velocity
    box=createSprite(random(20,750),100,40,40);
    box.velocityY=9;
    box.velocityX=4;
    box.shapeColor="red"

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges = createEdgeSprites();
box.bounceOff(edges)


    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor = "yellow"
        music.play();
    }
    if(surface2.isTouching(box)){
        box.shapeColor = "pink"
        box.velocityX=0;
        box.velocityY=0;
        music.stop()
    }
    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor = "orange"
    }
    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor = "blue"
    }
    
    drawSprites();
}
