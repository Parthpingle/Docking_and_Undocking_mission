var backgroundImage,issImage,iss,spacecraft;
var hasDocked = false;
var spacecraftImage1,spacecraftImage2, spacecraftImage3,spacecraftImage4;

function preload(){
backgroundImage = loadImage("images/spacebg.jpg");
issImage = loadImage("images/iss.png");
spacecraftImage1 = loadImage("images/spacecraft1.png");
spacecraftImage2 = loadImage("images/spacecraft2.png");
spacecraftImage3 = loadImage("images/spacecraft3.png");
spacecraftImage4 = loadImage("images/spacecraft4.png");
}

function setup() {
  createCanvas(800,400);
  iss = createSprite(400, 100, 50, 50);
  iss.addImage("issImage",issImage);
  iss.scale = 0.5;

  spacecraft = createSprite(300, 300, 50, 50);
  spacecraft.addImage(spacecraftImage1);
  spacecraft.scale = 0.3;
}

function draw() {
  background(backgroundImage);  
  if(!hasDocked){
    spacecraft.x = spacecraft.x+random(-1,1);
    if(keyDown(UP_ARROW)){
      spacecraft.y = spacecraft.y-1;
    }

    if(keyDown(DOWN_ARROW)){
      spacecraft.addImage(spacecraftImage2);
    }

    if(keyDown(RIGHT_ARROW)){
      spacecraft.addImage(spacecraftImage3);
      spacecraft.x = spacecraft.x+1;
    }

    if(keyDown(LEFT_ARROW)){
      spacecraft.addImage(spacecraftImage4);
      spacecraft.x = spacecraft.x-1;
    }
  }

  if(spacecraft.y<= (iss.y+70) && spacecraft.x<= (iss.x-10)){
    hasDocked = true;
    textSize(25);
    fill("yellow")
    text("Docking Successful !",400,300)
  }
  drawSprites();
}