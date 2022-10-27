var corni;
function setup() {
  createCanvas(600,800);
  corni = createSprite (300,400,30,40);
}

function draw() 
{
  background("green");

  if(keyIsDown(RIGHT_ARROW)){
   corni.position.x = corni.position.x + 10;
   corni.shapeColor = "red";
  }
  if(keyIsDown(LEFT_ARROW)){
    corni.position.x = corni.position.x - 10;
    corni.shapeColor = "blue";
   }
   if(keyIsDown(UP_ARROW)){
    corni.position.y = corni.position.y - 10;
    corni.shapeColor = "white";
   }
   if(keyIsDown(DOWN_ARROW)){
    corni.position.y = corni.position.y + 10;
    corni.shapeColor = "black";
   }
drawSprites();
}
console.log("hola");



