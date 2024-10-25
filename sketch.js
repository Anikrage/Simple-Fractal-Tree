
let angle = 0;
let slider;

function setup() {
  createCanvas(640, 480);
  slider = createSlider(0, TWO_PI, PI / 4, 0.01);
}

function draw() {
  background(0);
  angle = slider.value();
  stroke(255);
  strokeWeight(2);
  translate(width * 0.5, height);
  branch(100);
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 4) {
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
  }
}