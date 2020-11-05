var fixedRectangle, movingRectangle;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRectangle = createSprite(600, 400, 50, 80);
  fixedRectangle.shapeColor = "green";
  fixedRectangle.debug = true;

  movingRectangle = createSprite(400,200,80,30);
  movingRectangle.shapeColor = "green";
  movingRectangle.debug = true;

  gameObject1 = createSprite(100,100,40,80);
  gameObject1.shapeColor = "green";
  gameObject1.debug = true;

  gameObject2 = createSprite(200,100,40,80);
  gameObject2.shapeColor = "green";
  gameObject2.debug = true;

  gameObject3 = createSprite(300,100,40,80);
  gameObject3.shapeColor = "green";
  gameObject3.debug = true;

  gameObject4 = createSprite(400,100,40,80);
  gameObject4.shapeColor = "green";
  gameObject4.debug = true;
}

function draw() {
  background(0);  

  movingRectangle.x = World.mouseX;
  movingRectangle.y = World.mouseY;

  if(isTouching(movingRectangle,gameObject4)) {
    gameObject4.shapeColor = "red";
    movingRectangle.shapeColor = "red";
  }

  else {
  gameObject4.shapeColor = "green";
  movingRectangle.shapeColor = "green";
  }
  drawSprites();
}

function isTouching(object1,object2) {

  if(object1.x - object2.x < object2.width/2 + object1.width/2 && 
    object2.x - object1.x < object2.width/2 + object1.width/2 && 
    object2.y - object1.y < object2.height/2 + object1.height/2 &&
    object1.y - object2.y < object2.height/2 + object1.height/2) {
    return true;
  }

  else {
    return false;
  }
}