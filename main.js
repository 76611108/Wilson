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


  const menuSelect = document.getElementById('menu-select');
  const menuItems = document.querySelectorAll('.menu-item');

  menuSelect.addEventListener('change', () => {
    const selectedCategory = menuSelect.value;
    menuItems.forEach(item => {
      const itemCategory = item.getAttribute('data-category');
      if (selectedCategory === 'all' || selectedCategory === itemCategory) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });

