function preload(){
bg=loadImage("snow2.jpg")
snowmanImage=loadImage("snowboy.png")
}

function setup() {
  createCanvas(1000,650);
 snowman=createSprite(335, 580, 50, 50);
 snowman.addImage(snowmanImage)
 snowman.scale=0.04
}

function draw() {
  background(bg);  
  drawSprites();
}