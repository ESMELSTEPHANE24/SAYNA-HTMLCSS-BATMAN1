const form = document.getElementById('myForm');
const confirmCheckbox = document.getElementById('confirmCheckbox');
const popup = document.getElementById('popup');
const closeButton = document.querySelector('.close-btn');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  if (!confirmCheckbox.checked) {
    alert("Veuillez confirmer votre action en cochant la case.");
    return;
  }
  popup.classList.remove('hidden');
});

closeButton.addEventListener('click', function() {
  popup.classList.add('hidden');
});
