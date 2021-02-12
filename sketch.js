const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var Aengine;
var Aworld;
var ground;
var box1,box2,box3,box4,box5;
var pig1,pig2,pig3,pig4;
var log1,log2,log3,log4;
var bird;



function setup() {
createCanvas(1200,400);

// creating my own engine in reference to matter wngine
//adding world to engine
Aengine=Engine.create();
Aworld=Aengine.world;
 
//creating new object using box and ground class
box1= new Box(700,320,70,70);
box2= new Box(920,320,70,70);
box3 =new Box(700,240,70,70);
box4=new Box(920,240,70,70);
box5=new Box(810,160,70,70);

//creating ground
ground=new Ground(600,height,1200,20);

//pids
pig1= new Pig(810,350);
pig2 = new Pig(810,220);

//logs
log1 = new Log(810,260,300,PI/2)
log2= new Log(810,180,300,PI/2)
log3= new Log(760,120,150,PI/2);
log4= new Log(870,120,150,-PI/7);

//bird
bird = new Bird(100,100);

}

function draw() {

background(0);  

Engine.update(Aengine);

//calling display function of the class
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
ground.display(); 
pig1.display();
pig2.display();
log1.display();
log2.display();
log3.display();
log4.display()
bird.display();

}