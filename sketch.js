const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var ground; 
var fruit,rope;
var fruit_com;
var backgroundImage;
var fruitImage;
var cutButton;
var bunny;
var bunnyImage;


function preload(){

  backgroundImage = loadImage ("background.png")
  fruitImage = loadImage ("melon.png")
  bunnyImage = loadImage ("Rabbit-01.png")

}

function setup() {
  createCanvas(600,700);
  
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(300, 690, 600, 20);

  rope = new Rope(7,{x:220, y:30})
  fruit = Bodies.circle(300, 300, 20);
  Matter.Composite.add(rope.body,fruit);

  fruit_com = new Link(rope,fruit);
 
 bunny = createSprite(300,600,30,30);
 bunny.addImage(bunnyImage);
 bunny.scale = 0.25;

 cutButton = createImg("cut_button.png")
 cutButton.position(200,30)
 cutButton.size(50,50)
 cutButton.mouseClicked(drop)

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)


}

function draw() {
  background(51);
  image(backgroundImage, 0,0,width,height);
  push()
  imageMode(CENTER)
  image(fruitImage, fruit.position.x, fruit.position.y, 72,72)
  pop()

  rope.show();
  Engine.update(engine);
  ground.show();

  drawSprites();
} 

function drop(){
  rope.break()
  fruit_com.detach()
  fruit_com = null
}