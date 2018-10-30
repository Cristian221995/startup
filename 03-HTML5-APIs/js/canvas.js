var animation = window.setInterval(animateRectangle, 0.25);


function drawCanvas() {
  const canvas = document.getElementById('myCanvas');
  const context = canvas.getContext('2d');

  //circle  
  context.fillStyle = randomColor();
  context.strokeStyle = randomColor();
  context.beginPath();
  context.arc(700, 350, 100, 0, Math.PI * 2, true);
  context.stroke();
  context.fill();

  //triangle
  context.fillStyle = randomColor();
  context.beginPath();
  context.moveTo(500, 500);
  context.lineTo(700, 500);
  context.lineTo(700, 700);
  context.lineTo(500, 500);
  context.fill();

}

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return 'rgb(' + r + ', ' + g + ', ' + b + ')'; //generating random color for strokes and fills
}

var x = 50;
var posx = 50;
const rectangleColor = randomColor();
const strokeColor = randomColor();

function animateRectangle() {
  const canvas = document.getElementById('myCanvas');
  constCanvas = canvas.getContext('2d');

  constCanvas.clearRect(0, 0, 1000, 250);

  //rectangle
  constCanvas.fillStyle = rectangleColor;
  constCanvas.strokeStyle = strokeColor;
  constCanvas.fillRect(x, 50, 200, 150);

  //Defining movement loop
  if (posx < 350) {
    x++;
    posx++;
  }
  else {
    x--;
    posx++;
    if (x === 50) {
      posx = 50;
    }
  }
}