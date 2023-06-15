/*
  File: main.js
  Description: JavaScript code for the website's functionality.
  Author: Remi Fernandez

*/


<meta charset="UTF-8"/>

<meta name="keywords" content="Wilson's Kitchen, organic,food"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

document.addEventListener("DOMContentLoaded", function() {
  var slider = document.getElementById("myrange");
  var value = document.getElementById("value");


  value.innerHTML = slider.value;

  
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

