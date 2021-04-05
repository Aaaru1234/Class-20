var fixedrect,moverect;



function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(600, 400, 50, 50);
  moverect=createSprite(400, 200, 80, 30);
  moverect.shapeColor = "green";
  fixedrect.shapeColor = "green";

}

function draw() {
  background(0,0,0);  
  moverect.x = World.mouseX;
  moverect.y = World.mouseY;
  //console.log(moverect.x-fixedrect.x);
  if(moverect.x-fixedrect.x <moverect.width/2+ fixedrect.width/2 && fixedrect.x-moverect.x <moverect.width/2+ fixedrect.width/2 && 
    moverect.y-fixedrect.y <moverect.width/2+ fixedrect.width/2 && fixedrect.y-moverect.y <moverect.width/2+ fixedrect.width/2)
  {
    if(moverect.shapeColor==="green")
    {
      moverect.shapeColor = "red";
      fixedrect.shapeColor = "red";

    }
    else
    {
      moverect.shapeColor = "green";
      fixedrect.shapeColor = "green";
    }
    

  }
  

  drawSprites();
}