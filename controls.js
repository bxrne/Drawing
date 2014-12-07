var minRadius = 0.5;
var maxRadius = 100;
var defaultRadius = 10;
var interval = 5;

var currentRad = document.querySelector("#current");
var plusRad = document.querySelector("#radAdd");
var takeRad = document.querySelector("#radSub");

var setRadius = function(newr) {
  if(newr < minRadius) {
    newr = minRadius;
  }else if(newr > maxRadius) {
     newr = maxRadius;
  }
  radius = newr;
  ctx.lineWidth = radius*2;
  current.innerHTML = radius;
};

plusRad.addEventListener('click', function() {
  if(radius != 0.5) {
  setRadius(radius+interval);
  }else {
    setRadius(radius+interval - 0.5);
  }
}, false);

takeRad.addEventListener('click', function() {
 setRadius(radius-interval);
}, false);

setRadius(defaultRadius);