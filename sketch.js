
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,dustbin1,dustbin2,dustbin3,ground;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper=new Paper(100,100);
	dustbin1= new Dustbin(600,500,200,200);
	//dustbin2= new Dustbin(500,580,200,20);
	//dustbin3= new Dustbin(600,500,20,200);
    ground= new Ground(400,600,800,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  dustbin1.display();
  //dustbin2.display();
  //dustbin3.display();
  ground.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}



