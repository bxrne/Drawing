var saveBtn = document.querySelector("#save");
var clearBtn = document.querySelector("#clear");

saveBtn.addEventListener('click', download, false);
clearBtn.addeventListener('click', clear, false);

function download() {
  var data = canvas.toDataURL();
  var name = "_blank";
  var options = "";

  window.open(data, name, options);
}

function clear() {
  location.reload();
}