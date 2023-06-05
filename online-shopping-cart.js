var prices = {
    apple: 700,
    orange: 800,
    lemon: 900
};

var val_sum = 0;
var costElement = document.getElementById("cost");
var addtocartElement = document.getElementsByClassName("add-to-cart");

for (var i = 0; i < addtocartElement.length; i++) {
    addtocartElement[i].addEventListener("click", update);
}

function update(event) {
    val_sum += prices[event.target.parentElement.parentElement.id];
    costElement.textContent = val_sum + " KRW";
}