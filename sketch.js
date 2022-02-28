function setup(){
 createCanvas(400, 400);
 
Wall1 = createSprite(190, 120, 250,3);
Wall2 = createSprite(190, 260, 250,3);
Wall3 = createSprite(67, 145, 3,50);
Wall4 = createSprite(67, 235, 3,50);
Wall5 = createSprite(313, 145, 3,50);
Wall6 = createSprite(313, 235, 3,50);
Wall7 = createSprite(41, 170, 50,3);
Wall8 = createSprite(41, 210,50,3);
Wall9 = createSprite(337, 210, 50, 3);
Wall10 = createSprite(337, 170, 50, 3);
Wall11 = createSprite(18, 190,3,40);
Wall12 = createSprite(361, 190, 3, 40);

P = createSprite(35, 190, 15, 15)
P.shapeColor = "green";

Ob1 = createSprite(100, 130, 10,10);
Ob2 = createSprite(215, 130, 10,10);
Ob3 = createSprite(165, 250, 10,10);
Ob4 = createSprite(270, 250, 10,10);
Ob1.shapeColor = "red";
Ob2.shapeColor = "orange";
Ob3.shapeColor = "yellow";
Ob4.shapeColor = "purple";


Ob1.velocityY = +8;
Ob2.velocityY = +8;
Ob3.velocityY = -8;
Ob4.velocityY = -8;

}


function draw() {
 background("white");
  drawSprites()
Ob1.bounceOff(Wall1);
Ob1.bounceOff(Wall2);

Ob2.bounceOff(Wall1);
Ob2.bounceOff(Wall2);

Ob3.bounceOff(Wall1);
Ob3.bounceOff(Wall2);

Ob4.bounceOff(Wall1);
Ob4.bounceOff(Wall2);


if (keyDown("left")) {
  P.x = P.x - 2
}


if (keyDown("right")) {
  P.x = P.x + 2
}

P.collide(Wall11);
P.collide(Wall12);

if (P.isTouching(Ob1)){
  P.x = 35;
}

if (P.isTouching(Ob2)){
  P.x = 35;
}

if (P.isTouching(Ob3)){
  P.x = 35;
}

if (P.isTouching(Ob4)){
  P.x = 35;
}





}








