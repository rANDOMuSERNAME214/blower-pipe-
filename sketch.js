const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;


function setup() {
  createCanvas(800,400);

  engine=Engine.create()
  world=engine.world

 ball = new Ball(width/2+80,height/2-80,40,40)

 blower=new Blower(width/2-50,height/2+50,150,20)

 mouth=new BlowerMouth(width/2+70,height/2-70,100,100)

  button = createButton("Click to Blow")
  button.position(width/2,height-100)
  button.class("blowButton")
  button.size(50,50)
  button.mousePressed(blow);
}

function draw() {
   background(0,0,0);  
  Engine.update(engine)
  ball.display()
  blower.display()
  mouth.display()
  drawSprites();
}

function blow(){
  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:2})
  console.log("Button Clicked")
}