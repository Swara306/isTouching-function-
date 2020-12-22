var fixedRect, movingRect;
var cake1, cake2,cake3,cake4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "cyan";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "cyan";
  movingRect.debug = true;

  cake1 = createSprite (100,100,50,50);
  cake1.shapeColor = "yellow";
  cake2 = createSprite (200,100,50,50);
  cake2.shapeColor = "yellow";
  cake3 = createSprite (300,100,50,50);
  cake3.shapeColor = "yellow";
  cake4 = createSprite (400,100,50,50);
  cake4.shapeColor = "yellow";

  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect,cake3)){
    movingRect.shapeColor = "pink";
    cake3.shapeColor = "pink";
  }
  else{

    movingRect.shapeColor = "cyan";
    cake3.shapeColor = "yellow";

  }
  
  drawSprites();
}

function isTouching (object1,object2){

  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
  return true;
}
else {
  return false; 
}

}