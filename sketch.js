const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload(){

}

function setup(){


    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    polygon = new Polygon(200,200,25);
    slingshot = new SlingShot(polygon.body,{x:250,y:200});
    ground = new Ground(600,height,1200,20);
    stand = new Ground(800,375,400,20);
    box1 = new Box(800,350,50,50,255);
    box2 = new Box(735,350,50,50,255);
    box3 = new Box(865,350,50,50,255);
    box4 = new Box(835,300,50,50,255);
    box5 = new Box(765,300,50,50,255);
    box6 = new Box(800,250,50,50,255);
}

function draw(){
    Engine.update(engine);

    background(0);

    polygon.display();

    ground.display();
    stand.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    slingshot.display();

}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
    return false;
}

function mouseReleased(){
    slingshot.fly();
    return false;
}

function keyPressed(){
    if(keyCode === 32){
      slingshot.attach(polygon.body);
    }
}