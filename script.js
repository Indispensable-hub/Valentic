const menuToggle = document.querySelector('.fa-bars');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
})
