const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var ball,engine,world,ground;
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  var balloptions={
  'restitution':2,
  'friction':0.8,
  'density':1
  }
  ball=Bodies.circle(400,100,20,balloptions);
  World.add(world,ball);
  ground=Bodies.rectangle(400,380,800,20,{isStatic:true});
  World.add(world,ground);
}
function draw() {
  background(255,255,255);  
  Engine.update(engine);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
}