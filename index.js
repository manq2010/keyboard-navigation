// We also need to manually add in event handling for both mouse and keyboard events.
const buttons = document.querySelectorAll('.button');

function nameAlerter(e) {
  if (e.type === 'click' || e.key === ' ' || e.key === 'Enter') {
    alert(e.target.textContent);
  }
}

buttons.forEach(button => {
  button.addEventListener('click', nameAlerter)
  button.addEventListener('keydown', nameAlerter)
})