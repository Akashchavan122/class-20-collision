var fixedrect,movingrect;


function setup() {
  createCanvas(1200,800);
  //creating sprite for fixedrect
  fixedrect=createSprite(200, 200, 50, 80);
  //assigning the color 
  fixedrect.shapeColor="yellow";
  //shows the surface of fixed rect
  fixedrect.debug=true;
  //creating sprite for moving rect
 movingrect=createSprite(400,200,80,30);
 //shows the surface for moving rect
 movingrect.debug=true;
 //assigning color for moving rect
movingrect.shapeColor="yellow";
}

function draw() {
  //giving background
  background(0,0,0);
  //when mouse moves moving rect 
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2
    && fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
    && movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2
    && fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2 ){

    fixedrect.shapeColor="green";
    movingrect.shapeColor="green";
  }
else{
  fixedrect.shapeColor="yellow";
  movingrect.shapeColor="yellow"; 
}
  
  drawSprites();
}