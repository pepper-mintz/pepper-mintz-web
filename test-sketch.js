function setup() {
  createCanvas(400, 400);
}


function draw() {
  //offset variables so we can move the map around the canvas if we want
  var offsetX = 0;
  var offsetY = 0;
  
  //city boundaries
  stroke(0);
  strokeWeight(4);
  background(220);
  line(180 + offsetX, 50 + offsetY, 160 + offsetX, 80 + offsetY);
  line(160 + offsetX, 80 + offsetY, 150 + offsetX, 200 + offsetY);
  line (150 + offsetX, 200 + offsetY, 180 + offsetX, 320 + offsetY);
  line (180 + offsetX, 320 + offsetY, 210 + offsetX, 330 + offsetY);
  line (210 + offsetX, 330 + offsetY, 230 + offsetX, 280 + offsetY);
  line (230 + offsetX, 280 + offsetY, 240 + offsetX, 180 + offsetY);
  line (240 + offsetX, 180 + offsetY, 180 + offsetX, 50 + offsetY);
  
  //major streets
  strokeWeight(2)
  //park ave
  line(200 + offsetX, 90 + offsetY, 210 + offsetX, 330 + offsetY);
  //5th ave
  line(170 + offsetX, 69 + offsetY, 180 + offsetX, 320 + offsetY);
  //125th st
  line(155 + offsetX, 130 + offsetY, 220 + offsetX, 130 + offsetY);
  //42nt st
  line (153 + offsetX, 220 + offsetY, 235 + offsetX, 220 + offsetY);

  //central park
  fill(0, 200, 0)
  rectMode(CORNERS)
  rect(175, 150, 200, 200)

  //proportional symbols
 // fill(220, 0, 0);
 // strokeWeight(1);
  //density of subway stops above 72nd street
 // circle(188 + offsetX, 130 + offsetY, 22);
  //for a circle twice the area, multiply diameter by root of 2
  //num of subway stops below 72nd
 // circle(192 + offsetX, 250 + offsetY, 31.11);

  //label
  fill(100)
  strokeWeight(.25)
  textSize(20)
  text("Manhattan", 265 + offsetX, 50 + offsetY)
  textSize(10)
  //fill(220, 0, 0)
  //text("circles = density of subway stops", 10, 130)
  fill (0, 164, 0)
  text("central park ->", 70 + offsetX, 165 + offsetY)
  fill (100)
  text("42nd St", 110 + offsetX, 220 + offsetY)
  text("125th St", 110 + offsetX, 130 + offsetY)
  text("Park Ave", 200 + offsetX, 80+ offsetY)
  text("8th Ave", 135 + offsetX, 60 + offsetY)
  textSize(15)
  text("N", 245, 350)
  strokeWeight(1.25)
  line(265, 350, 265, 335)
  line(260, 340, 265, 335)
  line(270, 340, 265, 335)
  
  //console.log("density of subway stops above and below 72nd street by proportional symbols in New York City, USA")
}