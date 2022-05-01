const btn = document.getElementById('hamburger-btn');

function menuToggle() {
  btn.classList.toggle('active');
}

btn.addEventListener('click', menuToggle);