
var trex ,trex_running;
var surface ,ground2;
var cloudImage;
var obstacle1Image;
var obstacle2Image;
var obstacle3Image;
var obstacle4Image;
var obstacle5Image;
var obstacle6Image;
var gameOverImage;
function preload(){
trex_running=loadAnimation("trex1.png","trex3.png", "trex4.png");
  ground1=loadImage("ground2.png");
cloudImage=loadImage("cloud.png");
  trex_collided=loadAnimation("trex_collided.png");
 gameOver_Image=loadAnimation("gameOver.png");
  
  //obstacle Images
  obstacle1Image=loadImage("obstacle1.png");
  obstacle2Image=loadImage("obstacle2.png");
    obstacle3Image=loadImage("obstacle3.png");
    obstacle4Image=loadImage("obstacle4.png");
    obstacle5Image=loadImage("obstacle5.png");
    obstacle6Image=loadImage("obstacle6.png");
  
  
  
  
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50, 170, 10, 10);
  trex.addAnimation("running", trex_running);  
  trex.addAnimation("collided", trex_collided);
  trex.scale=0.6;
  
  gameOverImage=createSprite(300, 100, 10, 10);
  gameOverImage.addAnimation("gameOver",gameOver_Image);
surface = createSprite(300, 198, 600, 10);  
 surface.addImage("surface", ground1);
  surface.velocityX=-4;
  
  obstaclesGroup=createGroup();
  cloudsGroup=createGroup();
  
}

function draw(){
  background("black")
  gameOverImage.visible=false;
  if(keyDown("space")){
    trex.velocityY=-10;
    
  }
 trex.velocityY=trex.velocityY+0.8;
  trex.collide(surface);

obstacles();
  spawn_clouds();

  if(obstaclesGroup.isTouching(trex)){
    trex.changeAnimation("collided",trex_collided);
    trex.velocity=0;
    obstaclesGroup.velocity=0;
    cloudsGroup.velocity=0;
    surface.velocity=0;
    gameOverImage.visible=true;
  }
  
    if (surface.x < 0){
      surface.x = surface.width/2;
    }
    drawSprites();
}
function obstacles(){
  if(World.frameCount%120===0){
  var obstacles=createSprite(600, 173, 10, 10);
  obstacles.scale=0.6;
    obstacles.velocityX=-4;
    obstaclesGroup.add(obstacles);
    var rand=Math.round(random(1,6))
    switch(rand){
      case 1: obstacles.addImage(obstacle1Image);
      break;
      case 2: obstacles.addImage(obstacle2Image);
        break;
        case 3: obstacles.addImage(obstacle3Image);
        break;
        case 4: obstacles.addImage(obstacle4Image);
        break;
        case 5: obstacles.addImage(obstacle5Image);
        break;
        case 6: obstacles.addImage(obstacle6Image);
        break;
        default:break
        
    }
    
}}
function spawn_clouds(){
  if(World.frameCount%100===0){
  var clouds=createSprite(600, 130, 10, 10);
clouds.addImage(cloudImage);
    clouds.scale=0.7;
  clouds.velocityX=-3;
  clouds.y=random(0,100);
    cloudsGroup.add(clouds);
}

}
