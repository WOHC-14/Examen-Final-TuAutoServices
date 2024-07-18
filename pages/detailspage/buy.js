
document.addEventListener('DOMContentLoaded', () => {
  const checkoutForm = document.getElementById('checkoutForm');

  checkoutForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Evita el envío del formulario por defecto

      if (checkoutForm.checkValidity()) {
          simulatePayment();
      } else {
          checkoutForm.reportValidity(); // Muestra mensajes de validación nativos del navegador
      }
  });
});

function simulatePayment() {

  // Redirección a la página de confirmación
  window.location.href = 'confirmation.html';
}