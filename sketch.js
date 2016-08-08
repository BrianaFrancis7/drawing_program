

function circle(x, y, diameter) {
  ellipse(x, y, diameter, diameter);
}

// Draw a bullseye with 3 rings. Doesn't use "nRings" yet,
// can you fix it?
function bullseye(x, y, d, nRings, color1, color2) {
    noStroke();
    fill(color1);
    circle(x, y, d);
    fill(color2);
    circle(x, y, (2/3)*d);
    fill(color3);
    circle(x, y, (1/3)*d);
}

function chicken(x, y) {
  
  stroke(0);
  
  //Plate Outside Rim
  fill(50, 0, 100, 120);
  ellipse(x+10, y+25, 200, 100);
  
  //Plate Inside Rim
  fill(250, 80, 80, 100);
  ellipse(x+10, y+25, 150, 70);
  
  //Chicken
  fill(200, 90, 0);
  ellipse(x, y, 130, 90);
  
   //Chicken Bone
  fill(255, 255, 255);
  rect(x+50, y+12, 40, 10)
  
  //Chicken Bone Circle
  fill(255, 255, 255);
  ellipse(x+90, y+12, 15);
  
   //Chicken Bone Circle
  fill(255, 255, 255);
  ellipse(x+90, y+20, 15);
  
  //Chicken Leg
  fill(200, 90, 0);
  ellipse(x+50, y+15, 50, 40);
}

var myRed = 10;
var myGreen = 0;
var myBlue = 255;

function setup() {
  createCanvas(640, 480);
}

function draw() {
  noStroke();
  fill(myRed, myGreen, myBlue);
  circle(mouseX, mouseY, 10);
  //chicken(mouseX, mouseY);
  myRed = myRed + 0.5;
  if (myRed > 255) {
    myRed = 0;
  }
  myBlue = myBlue - 1;
  if (myBlue <= 0) {
    myBlue=255;
  }
}

function mousePressed() {
  //chicken(mouseX, mouseY);
  bullseye(mouseX, mouseY, 30, 3, "red", "blue");
}