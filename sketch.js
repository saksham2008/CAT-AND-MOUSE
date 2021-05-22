
var canvas,bg
var cat,cat1,cat2,cat3
var mouse,mouse1,mouse2,mouse3


function preload() {
    //load the images here
    bg=loadImage("garden.png")
    cat1=loadAnimation("cat1.png")
    cat2=loadAnimation("cat2.png")
    cat3=loadAnimation("cat3.png")
    mouse1=loadAnimation("mouse1.png")
    mouse2=loadAnimation("mouse2.png")
    mouse3=loadAnimation("mouse3.png")
    
    
}

function setup(){
    canvas=createCanvas(1000,800);
    //create tom and jerry sprites here
    cat.createSprite(870,600)
    cat.addAnimation("catSleeping",cat1)

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide

   






    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
