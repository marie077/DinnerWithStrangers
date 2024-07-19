let bg, fish1;
let square;
let fish1X = 1700;
let y = 50;
function setup() {
  bg = loadImage('assets/dinnerwithstrangers2.png');
  fish1 = loadImage('assets/fish1.png');
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(bg);
  fish1X -= 3;
  image(fish1, fish1X, 800);
  if (fish1X < -1000) {
    fish1X = 1950;
  }
 
}