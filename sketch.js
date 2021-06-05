var car,wall;
var speed,weight;
var deformation;


function setup() {
  createCanvas(1000,400);
  
 // movingRect = createSprite(200,50,50,50);
 // fixedRect = createSprite(200,200,50,50);
 //ob1 = createSprite(300,100,50,50);
 //ob2 = createSprite(100,300,50,50);
  speed = random(30,120);
  weight = random(400,1500);

  car = createSprite(50,200,50,50);
  wall  = createSprite(900,200,60,height/2);

  /*ob1.velocityX = -4;
  ob2.velocityX =  4;
  ob1.velocityY =  4;
  ob2.velocityY = -4;*/
  car.velocityX = speed;

   
}
 
function draw() {
  background(0);
 // movingRect.x = World.mouseX;
 // movingRect.y = World.mouseY; 
  
  //ob2.x = World.mouseX;
  //ob2.y = World.mouseY;

 /* if(isTouching(ob1,movingRect)) {
    ob1.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }
  else{
    ob1.shapeColor = "grey";
    movingRect.shapeColor = "grey";
  }*/
  //bounceOff(ob1,ob2);
  if(wall.x-car.x < (car.width + wall.width)/2)
  {
    car.velocityX = 0;
    //speed = 0;
    
    deformation = (0.5*weight*speed*speed)/22500;
   if(deformation > 180){
    car.shapeColor = color(255,0,0);
   }
    if(deformation < 180 && deformation > 100){
      car.shapeColor = color(230,230,0);
    }
    if(deformation < 180){
      car.shapeColor = color(0,255,0);
    }
  }
  
  drawSprites();
};
