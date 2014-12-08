var canvas = document.querySelector("#c");
var ctx = canvas.getContext("2d");

var radius = 10;
var dragging = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var putPoint = function(e) {
  if(dragging) {

  ctx.lineWidth = radius * 2;
  ctx.lineTo(e.clientX, e.clientY);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(e.clientX, e.clientY, radius, 0, Math.PI*2, false);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(e.clientX, e.clientY);
  }
};

canvas.addEventListener('mousemove', putPoint, false);
canvas.addEventListener('mouseup', function(e) {
  dragging = false;
  ctx.beginPath();
}, false);
canvas.addEventListener('mousedown', function(e) {
  dragging = true;
  putPoint(e);
}, false);

