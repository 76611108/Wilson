const slider = document.getElementById("donationSlider");
const sliderValue = document.querySelector(".slider-value");

slider.addEventListener("input", updateSliderValue);

function updateSliderValue() {
    const value = slider.value;
    sliderValue.textContent = "R" + value;
}
