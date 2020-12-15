
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint ;

var bobDiameter = 40;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	bobObject1 = new Bob (820,200,50,50);
	bobObject2 = new Bob (860,200,50,50);
	bobObject3 = new Bob (900,200,50,50);
	bobObject4 = new Bob (940,200,50,50);
	bobObject5 = new Bob (980,200,50,50);

	roofObject = new Roof (900,10,400,5);

	rope1 = new Rope(bobObject1.body,roofObject.body,bobDiameter*-2,0);
	rope2 = new Rope(bobObject2.body,roofObject.body,bobDiameter*-1,0);
	rope3 = new Rope(bobObject3.body,roofObject.body,bobDiameter*0,0);
	rope4 = new Rope(bobObject4.body,roofObject.body,bobDiameter*1,0);
	rope5 = new Rope(bobObject5.body,roofObject.body,bobDiameter*2,0);

	keyPressed ();

	Engine.run(engine);
	
}


function draw() {

  rectMode(CENTER);
  background(255,255,255);

  drawSprites();

 roofObject.display();
 rope1.display ();
 rope2.display ();
 rope3.display ();
 rope4.display ();
 rope5.display ();

 bobObject1.display();
 bobObject2.display();
 bobObject3.display();
 bobObject4.display();
 bobObject5.display();
  
}

function keyPressed () {
	if (keyCode === UP_ARROW) { 
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:+45,y:+25});
	} 
}