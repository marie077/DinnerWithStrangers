let bg;
let square;
let y = 50;
function setup() {
  bg = loadImage('assets/dinnerwithstrangers2.png');
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(bg);
  circle(800, y, 25);
 
}