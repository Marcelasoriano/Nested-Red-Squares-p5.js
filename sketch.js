function setup() {
  createCanvas(500, 500);
  fill(255, 0, 0);
  rectMode(CENTER);
}

let rot = 0;

function draw() {
  background(220);
  translate(10, 10);
  
  for (let y = 0; y < 25; y++) {
    for (let x = 0; x < 25; x++) {
      push();
      translate(x * 20, y * 20) //positioning
      rotate(rot);
      rect(0, 0, 30, 10); // position of object 
      pop();
      }
    }
    rot = rot + 0.01;
}
