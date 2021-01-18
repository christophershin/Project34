const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Mouse.Constraint;

var ground, hero, fly;
var block1,block2,block3,block4,block5;
var block6,block7,block8,block9,block10;

function preload() {
//preload the images here
background=loadImage("c34images/GamingBackground.png")
hero=loadImage("c34images/Superhero-01.png")
monster=loadImage("c34images/Monster-01.png")
}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
  ground= new Ground(1500,790,3000,20)
  hero= new Hero(1300,400,40)
  fly=new Fly(1300,100, hero.body)

  block1= new Blocks(1600,600,20,20)
  block2= new Blocks(1600,580,20,20)
  block3= new Blocks(1600,560,20,20)
  block4= new Blocks(1600,540,20,20)
  block5= new Blocks(1600,520,20,20)
  block6= new Blocks(1620,600,20,20)
  block7= new Blocks(1620,580,20,20)
  block8= new Blocks(1620,560,20,20)
  block9= new Blocks(1620,540,20,20)
  block10= new Blocks(1620,520,20,20)
}

function draw() {
  background(0);

  ground.display();
  hero.display();
  fly.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();

  
  
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}
