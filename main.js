document.addEventListener("DOMContentLoaded", function() {
  var slider = document.getElementById("myrange");
  var value = document.getElementById("value");

  // Display the initial value
  value.innerHTML = slider.value;

  // Update the value as the slider is moved
  slider.addEventListener("input", function() {
    value.innerHTML = this.value;
  });
});
