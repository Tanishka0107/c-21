var fixed, moving;

function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 100);
  fixed.shapeColor = "blue";

moving = createSprite(400, 200, 100, 50);
moving.shapeColor = "blue";
rect1 = createSprite(700, 100, 50, 50);
rect1.shapeColor = "blue";
rect2 = createSprite(700, 300, 50, 50);
rect2.shapeColor = "blue";
rect1.velocityY = 2;
rect2.velocityY = -2;
}
function draw() {
  background(255,25,250);
  moving.x = mouseX;
  moving.y = mouseY;  

if (Touching(moving, fixed)== true) {
  moving.shapeColor = "red";
  fixed.shapeColor = "red";
} 
else{
  moving.shapeColor = "blue";
  fixed.shapeColor = "blue";
}
 BounceOff(rect1, rect2);
  drawSprites();
}

function Touching(object1, object2) {
  if(object1.x - object2.x < object2.width/2+object1.width/2&&
    object2.x - object1.x < object2.width/2+object1.width/2&&
    object1.y - object2.y < object2.height/2+object1.height/2&&
    object2.y - object1.y < object2.height/2+object1.height/2) {
   return true
  }
  else{

  return false

 
  }
}
function BounceOff(object1, object2) {
  if(object1.x - object2.x < object2.width/2+object1.width/2&&
    object2.x - object1.x < object2.width/2+object1.width/2) {
object1.velocityX = object1.velocityX * (-1);
object2.velocityX = object2.velocityX * (-1);
  }

  if(object1.y - object2.y < object2.height/2+object1.height/2&&
    object2.y - object1.y < object2.height/2+object1.height/2) {
      object1.velocityY = object1.velocityY * (-1);
      object2.velocityY = object2.velocityY * (-1);
  }
}