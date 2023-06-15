/*
  File: main.js
  Description: JavaScript code for the website's functionality.
  Author: Remi Fernandez
*/

document.addEventListener("DOMContentLoaded", function() {
  var slider = document.getElementById("myrange");
  var value = document.getElementById("value");

  value.innerHTML = slider.value;

  slider.addEventListener("input", function() {
    value.innerHTML = this.value;
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
});

