// Get the slider input element
var slider = document.getElementById("myrange");

// Get the value display element
var valueDisplay = document.getElementById("value");

// Update the value display when the slider value changes
slider.addEventListener("input", function() {
  valueDisplay.textContent = slider.value;
});
