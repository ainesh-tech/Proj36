var dog,sadDog,happyDog;
var milk,weNeedSomeMilk;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
  weNeedSomeMilk = loadImage("Images/Milk.png")
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  var milk=createSprite (200,200,20,20);
  milk.addImage(weNeedSomeMilk);
  milk.scale=0.1;

}

function draw() {
  background(46,139,87);
  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock
