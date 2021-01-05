var fixedRect, movingRect;
var ball ; 
function setup() {
  createCanvas(400 , 400);
  fixedRect = createSprite(200, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  movingRect = createSprite(300, 100,50,50);
  movingRect.shapeColor = "green";
 ball = createSprite(100 , 100 , 50 , 50)
 ball.shapeColor = "blue" ;
}

function draw() {
  background("black");  
ball.x = World.mouseX
ball.y = World.mouseY
 if( istouching(movingRect , ball)) {

 
        ball.shapeColor = "red";
        movingRect.shapeColor = "red";
  }
 else{
  ball.shapeColor = "blue";
  movingRect.shapeColor = "green";
 }
  drawSprites();
}
function istouching(object1 , object2){
  if (object2.x - object1.x < object1.width/2 + object2.width/2
    && object1.x - object2.x < object1.width/2 + object2.width/2 && object2.y - object1.y < object1.height/2 + object2.height/2 && object1.y - object2.y < object1.height/2 + object2.height/2 ) {
return true ; }
else {
  return false ; 
}
}