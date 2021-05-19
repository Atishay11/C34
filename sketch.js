const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3;
var chain1;
var trainSound 
var crashSound
var flag = 0;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);
  boggy1 = new Boggy(100,375,50,50);
  boggy2 = new Boggy(175,375,50,50);
  boggy3 = new Boggy(250,375,50,50);
  boggy4 = new Boggy(325,375,50,50);
  boggy5 = new Boggy(400,375,50,50);
  boggy6 = new Boggy(475,375,50,50);
  slingshot = new SlingShot(boggy1.body,boggy2.body);
  slingshot1 = new SlingShot(boggy2.body,boggy3.body);
  slingshot2= new SlingShot(boggy3.body,boggy4.body);
  slingshot3= new SlingShot(boggy4.body,boggy5.body);
  slingshot4= new SlingShot(boggy5.body,boggy6.body);

}

function draw() {
  background(bg);  
  Engine.update(myEngine);
   boggy1.show();
   boggy2.show();
   boggy3.show();
   ground.show();
   boggy4.show();
   boggy5.show();
   boggy6.show();
   slingshot.show();
   slingshot1.show();
   slingshot2.show();
   slingshot3.show();
   slingshot4.show();
   

  }

  
  function keyPressed(){
    if(keyCode === RIGHT_ARROW){
      Matter.Body.applyForce(boggy6.body,{ x: boggy6.body.position.x,y: boggy6.body.position.y},{x:0.2,y:0.0})
        
    }
}