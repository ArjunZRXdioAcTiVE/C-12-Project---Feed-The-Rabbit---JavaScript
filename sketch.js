var garden,rabbit;

var gardenImg,rabbitImg;

var leaf, leafIMG;

var apple, appleIMG; 

function preload(){
  gardenImg = loadImage("garden.png");
  
  rabbitImg = loadImage("rabbit.png");

  appleIMG = loadImage ("apple.png");

  leafIMG = loadImage ("redImage.png")
}

function setup(){
  createCanvas(400,400);
  
  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale = 0.09;
  rabbit.addImage(rabbitImg);

  edges = createEdgeSprites ();
}

function draw() {
  rabbit.x = World.mouseX;

  rabbit.collide(edges);

  createApples ();
  createLeaves ();

  drawSprites();
}

function createApples () {
  if (frameCount % 80 == 0) {
    apple = createSprite (Math.round (random (75, 325)), 0)
    apple.addImage (appleIMG);
    apple.scale = 0.07;
    apple.velocityY = 3;
    apple.lifetime = 150;

    rabbit.depth = apple.depth;
    rabbit.depth ++;
  }
}

function createLeaves () {
  if (frameCount % 80 == 0) {
    leaf = createSprite (Math.round (random (75, 325)), 0)
    leaf.addImage (leafIMG);
    leaf.scale = 0.05;
    leaf.velocityY = 2;
    leaf.lifetime = 225;

    rabbit.depth = leaf.depth;
    rabbit.depth ++;
  }
}