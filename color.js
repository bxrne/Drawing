function setColor() {
  var color = document.querySelector("#color");
  color.style.backgroundColor = color.value;

  ctx.fillStyle = color.value;
  ctx.strokeStyle = color.value;
}

setInterval(setColor ,0);