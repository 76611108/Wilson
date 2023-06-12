const range = document.getElementById('myrange');
const value = document.getElementById('value');

value.textContent = range.value;

range.addEventListener('input', function() {
  value.textContent = this.value;
});
