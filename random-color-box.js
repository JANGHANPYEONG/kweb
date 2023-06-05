function setRandomBgColor() {
  var colorbox = document.getElementById("color-box");
  var val_Color = "rgb(" + getrandom() + "," + getrandom() + "," + getrandom() + ")";
  colorbox.style.backgroundColor = val_Color;
}


function getrandom() {
  return Math.floor(Math.random() * 256);
}