function mostrarSorpresa() {
  const mensaje = document.getElementById('mensajeOculto');
  mensaje.style.display = 'block';
}

// Confetti
for (let i = 0; i < 50; i++) {
  let confetti = document.createElement('div');
  confetti.classList.add('confetti');
  confetti.style.left = Math.random() * 100 + 'vw';
  confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 70%)`;
  confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
  document.body.appendChild(confetti);
}