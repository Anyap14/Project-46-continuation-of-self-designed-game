var aircraft, aircraftImg;
var ufo, ufoImg;
var bgImg, bg1;
var missile, missileImg;
var missileGroup;
var blastImg, blast;


function preload(){
  
  aircraftImg = loadImage("assets/aircraft.png");
  ufoImg = loadImage("assets/ufo.png");
  bgImg = loadImage("assets/bg.jpeg");
  missileImg=loadImage("assets/missile.png");
 blastImg=loadImage("assets/blast.png")
}

function setup() {

  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg1 = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg1.addImage(bgImg)
bg1.scale = 2

//creating the aircraft sprite
aircraft = createSprite(displayWidth-1230, displayHeight-540, 50, 50);
aircraft.addImage(aircraftImg)
aircraft.scale = 0.7
aircraft.debug = true
aircraft.setCollider("rectangle",0,0,300,300)

   //creating the ufo sprite
   ufo=createSprite(displayWidth/2+250, displayHeight/2-80, 20, 20)
   ufo.addImage(ufoImg)
   ufo.scale=0.4
 
//creating missile group
missileGroup=new Group()

}



function draw() { 

  //moving the aircraft up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  aircraft.y = aircraft.y-20
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 aircraft.y = aircraft.y+20
}
if(keyDown("LEFT_ARROW")||touches.length>0){
  aircraft.x = aircraft.x-20
}
if(keyDown("RIGHT_ARROW")||touches.length>0){
 aircraft.x = aircraft.x+20
}

//creating missile shooting sprite when space bar is pressed
if(keyWentDown("space")){
  missile=createSprite(displayWidth-1230, displayHeight-510, 40, 40)
  missile.addImage(missileImg)
  missile.scale=0.04
 missile.velocityX=8
 missileGroup.add(missile)
 }

 //missile to collide with ufo
 if(ufo.isTouching(missileGroup)){
  ufo.destroy()
  missile.velocityX=0
  blast=createSprite(displayWidth/2+250, displayHeight/2-80, 20, 20)
  blast.scale=0.5
 blast.addImage(blastImg)
 }


drawSprites();

}
