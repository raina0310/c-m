var bgImg;
var cat;
var mouse;

function preload() {
    //load the images here
    bgImg = loadImage("garden.png");
    catImg1= loadAnimation("images/cat1.png");
    mouseImg1= loadAnimation("images/mouse1.png");
    catImg2= loadAnimation("cat2.png","cat3.png");
    mouseImg2= loadAnimation("mouse2.png", "mouse3.png");
    catImg3= loadImage("cat4.png");
    mouseImg3= loadImage("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat= createSprite(870,600);
    cat.addAnimation("catSitting", catImg1);
    cat.scale=0.2;

    mouse= createSprite(350,550);
    mouse.addAnimation("mouseStanding", mouseImg1);
    

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width-mouse.width)/2){
        cat.velocityX=0;
        cat.addAnimation("catLastImage", catImg3);
        cat.changeAnimation("catLastImage");
        cat.x= 300;
        cat.scale=0.2;
    }

    drawSprites();
}


function keyPressed(){
//For moving and changing animation write code here

if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing", mouseImg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay= 25;

    cat.velocityX= -5;
    cat.addAnimation("catAngry", catImg2);
    cat.changeAnimation("catAngry");

    cat.frameDelay= 25;

}
}


