var bullet,wall;
var speed,weight;
var thickness;
var lbullet,lwall;


function setup() {
  createCanvas(1600,400);
  var speed=random(223,321);
  var weight=random(30,52);
  var thickness=random(22,83);
  var bullet=createSprite(200,200,30,20);
  bullet.shapeColor=color(255,255,255);
  var wall=createSprite(1500,100,20,700);
  wall.shapeColor=color(80,80,80);
  bullet.velocityX=speed;
  /*var lbullet=bullet.rightEdge.x;
  var lwall=wall.leftEdge.x;*/
}


function draw() {
  background(0,0,0); 
  
  
  //hasCollided();
  drawSprites();
}

function hasCollided(lbullet,lwall)
  {
    bulletRightEdge=bullet.x+bullet.width;
    wallLeftEdge=lwall.x;

    if(bulletRightEdge>=wallLeftEdge)
    {
      return true
    }
     return false;

     if (hasCollided(bullet,wall))
     {
       bullet.velocityX=0;
       var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);

       if (damage>10)
       {
         wall.shapeColor=color(255,0,0);
       }

       if (damage<10)
       {
         wall.shapeColor=color(0,255,0);       
       }
     }
  }