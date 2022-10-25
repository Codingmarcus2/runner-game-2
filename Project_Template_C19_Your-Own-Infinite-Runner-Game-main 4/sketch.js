var rocketIMG, player, spaceIMG
var meteorIMG, gameOver, meteor
var startButton, muteButton
var pauseButton, fuel
var restartButton, laser
var meteorG, bulletG
var space

function preload(){
rocketIMG = loadImage("rocket-player.png")
spaceIMG = loadImage("th.jpeg")
meteorIMG = loadImage("meteor_PNG37.png")
gameOver = loadImage("game_over_PNG12.png")
startButton = loadImage("start_button.jpeg")
muteButton = loadImage("yellow-mute-button-hi.png")
restartButton = loadImage("restart-button.jpeg")
fuel = loadImage("Fuel-can.jpeg")

}

function setup() {
 createCanvas(windowWidth,windowHeight)
 space = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
space.addImage(spaceIMG);
space.velocityY = 4;
 player = createSprite(displayWidth/2-20,displayHeight-(displayHeight*0.26),50,50)
 player.addImage(rocketIMG)
 player.scale = 0.35
 meteorG = new Group()
 laserG = new Group()
 //spaceIMG.velocityY -= 2
 
 
 

}

function draw() {

    
background(0)
if(space.y > 400 ){
    space.y = height/2;
  }

if(keyWentDown(LEFT_ARROW)){
    player.velocityX = -7
}
if(keyWentDown(RIGHT_ARROW)){
    player.velocityX = 7
}
if(keyWentDown("space")){
 shootLaser()
}
if(meteorG.isTouching(laserG)){
 

    for(var i=0;i<meteorG.length;i++){     
         
     if(meteorG[i].isTouching(laserG)){
          meteorG[i].destroy()
          laserG[i].destroy()
          } 
          /*if(meteorG[i].isTounching(player)){
            player.destroy()
          }*/
    }
   }
  if(meteorG.isTouching(player)){
    player.setVelocityX -= 0
  }
spawnMeteors()
 drawSprites()
}
function spawnMeteors(){
    if (frameCount % 50 === 0){
        
     var meteor = createSprite(displayWidth/2-20,displayHeight-(displayHeight*0.9),50,50)
     meteor.addImage(meteorIMG);
     console.log("i am meteors")
     meteor.scale = 0.10
     meteor.x = Math.round(random(100,1300))
     meteor.velocityY = 2
     meteorG.add(meteor)
        
      //adjust the depth
    meteor.depth = player.depth;
    player.depth = player.depth + 1;
    meteor.lifeTime = 1000
}

}

function shootLaser(){
laser = createSprite(player.x, player.y -90, 10,50)
laser.velocityY = -5
laser.shapeColor = rgb(0,255,33)
laserG.add(laser)
}

/*function destroyMeteors(laserG, meteor){
    laserG.destroyEach()
}*/