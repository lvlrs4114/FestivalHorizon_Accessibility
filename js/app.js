function toggleMenu() {
  document.querySelector('.nav')?.classList.toggle('open');
}

function openModal() {
  document.getElementById('modal-backdrop')?.classList.add('open');
}

function closeModal() {
  document.getElementById('modal-backdrop')?.classList.remove('open');
}

function toggleFaq(id) {
  const panel = document.getElementById(id);
  if (panel) panel.hidden = !panel.hidden;
}

function validateForm(event) {
  event.preventDefault();
  const email = document.getElementById('email');
  const error = document.getElementById('email-error');
  if (!email.value.includes('@')) {
    error.textContent = 'Email incorrect';
  } else {
    error.textContent = '';
    alert('Inscription enregistrée');
  }
}
