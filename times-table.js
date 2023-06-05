function displayTimes() {
  var input = document.getElementById("number").value;
  var times_result = document.getElementById("times-result");
  var temp = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  times_result.textContent = "";

  if (temp.includes(Number(input))) {

    for (var i = 1; i <= 9; i++) {
      var multiplicationElement = document.createElement("p");
      multiplicationElement.textContent = Number(input) + " x " + i + " = " + (Number(input) * i);
      times_result.appendChild(multiplicationElement);
    }
  } else {
    times_result.textContent = "Input Error!";
  }
}