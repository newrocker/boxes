const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1, box2;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box (240,100,100,150)

    ground = new Ground(300,450,1200,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    box2.display();
    box1.display();
    ground.display();
}