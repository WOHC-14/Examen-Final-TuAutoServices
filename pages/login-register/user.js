document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');

    if (registerForm) {
        registerForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (password !== confirmPassword) {
                alert('Las contraseñas no coinciden.');
                return;
            }

            // Aquí puedes agregar la lógica para enviar los datos de registro al servidor
            console.log('Registro:', { username, email, password });

            alert('Registro exitoso.');
            window.location.href = 'login.html'; // Redirige a la página de inicio de sesión después del registro
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Aquí puedes agregar la lógica para enviar los datos de inicio de sesión al servidor
            console.log('Inicio de sesión:', { email, password });

            alert('Inicio de sesión exitoso.');
            window.location.href = '/pages/homepage/index.html'; // Redirige a la página principal después del inicio de sesión
        });
    }
});
