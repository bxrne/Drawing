var saveBtn = document.querySelector("#save");
var clearBtn = document.querySelector("#clear");

function download() {
  var data = canvas.toDataURL();
  var name = "_blank";
  var options = "";

  window.open(data, name, options);
}

function clear() {
  location.reload();
}

saveBtn.addEventListener('click', download, false);
clearBtn.addeventListener('click', clear, false);

