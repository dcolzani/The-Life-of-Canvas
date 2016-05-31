var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
context.lineWidth = 2;
context.fillStyle="#fff";
context.rect(0,0,800,500);
context.fill();
var down = false;

canvas.addEventListener('mousemove', draw);
//canvas.addEventListener('touchmove', draw);

canvas.addEventListener('mousedown', function(){
   down = true;
   context.beginPath();
   context.moveTo(xPos, yPos);
   canvas.addEventListener("mousemove", draw);
});


canvas.addEventListener('mouseup', function() { down = false });

function draw(e) {
    xPos = e.clientX - canvas.offsetLeft;
    yPos = e.clientY - canvas.offsetTop;

    if(down == true) {
        context.lineTo(xPos, yPos);
        context.stroke();
    }
}

/* touch controls

canvas.addEventListener("touchstart", function (e) {
  mousePos = getTouchPos(canvas, e);
  var touch = e.touches[0];
  var mouseEvent = new MouseEvent("mousedown", {
    clientX: touch.clientX,
    clientY: touch.clientY
  });
  canvas.dispatchEvent(mouseEvent);
}, false);
canvas.addEventListener("touchend", function (e) {
  var mouseEvent = new MouseEvent("mouseup", {});
  canvas.dispatchEvent(mouseEvent);
}, false);
canvas.addEventListener("touchmove", function (e) {
  var touch = e.touches[0];
  var mouseEvent = new MouseEvent("mousemove", {
    clientX: touch.clientX,
    clientY: touch.clientY
  });
  canvas.dispatchEvent(mouseEvent);
}, false);

// Get the position of a touch relative to the canvas
function getTouchPos(canvasDom, touchEvent) {
  var rect = canvasDom.getBoundingClientRect();
  return {
    x: touchEvent.touches[0].clientX - rect.left,
    y: touchEvent.touches[0].clientY - rect.top
  };
}*/

function changeColor(color) { context.strokeStyle = color; context.fillStyle = color; }
function clearCanvas() { context.clearRect(0, 0, canvas.width, canvas.height); }
function changeBrushSize(size) { context.lineWidth = size; }
function fillCanvas() { context.fillRect(0, 0, canvas.width, canvas.height); }
function changeBrushStyle(brushStyle) { context.lineCap = brushStyle; }

// Prevent scrolling when touching the canvas
document.body.addEventListener("touchstart", function (e) {
  if (e.target == canvas) {
    e.preventDefault();
  }
}, false);
document.body.addEventListener("touchend", function (e) {
  if (e.target == canvas) {
    e.preventDefault();
  }
}, false);
document.body.addEventListener("touchmove", function (e) {
  if (e.target == canvas) {
    e.preventDefault();
  }
}, false);

function downloadCanvas(link, canvasId, filename) {
    link.href = document.getElementById(canvasId).toDataURL();
    link.download = filename;
}

document.getElementById('download').addEventListener('click', function() {
    downloadCanvas(this, 'canvas', 'TheLifeOfCanvas.png');
}, false);