
var slider = document.getElementById("myrange");


var valueDisplay = document.getElementById("value");


slider.addEventListener("input", function() {
  valueDisplay.textContent = slider.value;
});

