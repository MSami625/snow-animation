const Engine = Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var bg
var snow=[];

function preload(){
  bg=loadImage("snow3.jpg");
}

function setup() {
  createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(bg); 

  //engine = Engine.update();
  
 if(frameCount%5===0){
  snow.push(new Snow(random(10,1000),10, 20,20));
}

for(var i = 0; i < snow.length; i++){
  snow[i].display();
 }
}
  
 
