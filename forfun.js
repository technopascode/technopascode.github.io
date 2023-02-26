const popUpButton = document.getElementById('pop-up-button');
const popUpContainer = document.getElementById('pop-up-container');
const closeButton = document.getElementById('close-button');

popUpButton.addEventListener('click', function() {
  popUpContainer.style.display = 'block';
});

closeButton.addEventListener('click', function() {
  popUpContainer.style.display = 'none';
});
