var hr,hrAngle
var mn,mnAngle
var sc,scAngle



function setup() {
  createCanvas(400,400);
 // createSprite(400, 200, 50, 50);
 angleMode(DEGREES)
}

function draw() {
  background(0);  
  translate(200,200)
  rotate(-90)
  
  hr = hour();
  hrAngle = map(hr%12,0,12,0,360)
  mn = minute();
  mnAngle = map(mn,0,60,0,360)
  sc = second();
  scAngle = map(sc,0,60,0,360)

  push()
  rotate(hrAngle)
  stroke(0,0,255)
  strokeWeight(6)
  line(0,0,50,0)
  pop()

  push()
  rotate(mnAngle)
  stroke(0,255,0)
  strokeWeight(6)
  line(0,0,70,0)
  pop()

  push()
  rotate(scAngle)
  stroke(255,0,0)
  strokeWeight(6)
  line(0,0,90,0)
  pop()

  strokeWeight(10)
  noFill()

  stroke(0,0,255)
  arc(0,0,250,250,0,hrAngle)

  stroke(0,255,0)
  arc(0,0,270,270,0,mnAngle)

  stroke(255,0,0)
  arc(0,0,290,290,0,scAngle)
}