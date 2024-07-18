document.addEventListener("DOMContentLoaded", function() {
    cargarFavoritos();
    actualizarIconosFavoritos();
});

function guardarEnFavoritos(button) {
    // Obtener la card completa
    const card = button.closest('.card');
    
    // Obtener el identificador único de la card
    const cardId = card.getAttribute('data-id');
    
    // Obtener los favoritos del localStorage
    let favoritos = localStorage.getItem('favoritos');
    favoritos = favoritos ? JSON.parse(favoritos) : [];
    
    // Verificar si la card ya está en favoritos
    const index = favoritos.findIndex(fav => fav.id === cardId);
    
    if (index !== -1) {
        // Si la card ya está en favoritos, eliminarla
        favoritos.splice(index, 1);
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
        button.innerHTML = '<i class="fa-regular fa-star"></i>'; // Cambiar el icono a estrella vacía
    } else {
        // Si la card no está en favoritos, agregarla
        const cardClonada = card.cloneNode(true);
        const botonClonado = cardClonada.querySelector('button');
        botonClonado.innerHTML = '<i class="fa-solid fa-star"></i>'; // Cambiar el icono a estrella llena

        favoritos.push({ id: cardId, html: cardClonada.outerHTML });
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
        button.innerHTML = '<i class="fa-solid fa-star"></i>'; // Cambiar el icono a estrella llena
    }

    // Actualizar la vista de favoritos sin recargar la página
    cargarFavoritos();
    actualizarIconosFavoritos();
}

// Función para cargar favoritos en la página de favoritos
function cargarFavoritos() {
    const favoritosContainer = document.getElementById('favoritos-container');
    if (!favoritosContainer) return;
    
    let favoritos = localStorage.getItem('favoritos');
    favoritos = favoritos ? JSON.parse(favoritos) : [];
    
    favoritosContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar los favoritos

    if (favoritos.length === 0) {
        // Mostrar mensaje si no hay favoritos
        favoritosContainer.innerHTML = '<p style=" color: red; font-size: 24px; font-family: Lato;">No hay autos en favoritos.</p>';
    } else {
        // Mostrar los favoritos
        favoritos.forEach(fav => {
            const card = document.createElement('div');
            card.innerHTML = fav.html;
            
            // Añadir el botón de favoritos con el estado correcto del icono
            const button = card.querySelector('.button-favorite');
            button.innerHTML = '<i class="fa-solid fa-star"></i>';
            button.onclick = function() {
                guardarEnFavoritos(this);
            };
            
            favoritosContainer.appendChild(card);
        });
    }
}

// Función para actualizar los iconos de favoritos en la página principal
document.addEventListener('DOMContentLoaded', function() {
    actualizarIconosFavoritos();
});

function actualizarIconosFavoritos() {
    const cards = document.querySelectorAll('.card');
    let favoritos = localStorage.getItem('favoritos');
    favoritos = favoritos ? JSON.parse(favoritos) : [];

    cards.forEach(card => {
        const cardId = card.getAttribute('data-id');
        const button = card.querySelector('.button-favorite');

        if (button) {
            const index = favoritos.findIndex(fav => fav.id === cardId);
            if (index !== -1) {
                button.innerHTML = '<i class="fa-solid fa-star"></i>';
            } else {
                button.innerHTML = '<i class="fa-regular fa-star"></i>';
            }
        }
    });
}


//BUSQUEDA-FUNCIONAMIENTO

document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const searchTerm = document.getElementById('searchInput').value.trim();
    if (searchTerm) {
        window.location.href = `/pages/resultspage/resultados.html?search=${encodeURIComponent(searchTerm)}`;
    }
});

  //menu desplegable
  function toggleMenu() {
    const navSection = document.querySelector('.nav-section');
    const menuIcon = document.querySelector('.menu-icon');
    
    if (navSection.style.display === 'flex') {
      navSection.style.display = 'none';
      menuIcon.classList.remove('active');
    } else {
      navSection.style.display = 'flex';
      menuIcon.classList.add('active');
    }
  }

