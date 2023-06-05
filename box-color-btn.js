function changeBoxColor() {
  var box = document.getElementsByClassName("box")[1]
  var val_Color = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
  box.style.backgroundColor = val_Color;
}