document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    fetch('/pages/productos.json')
        .then(response => response.json())
        .then(data => {
            const producto = data.productos.find(p => p.id === productId);
            if (producto) {
                mostrarProducto(producto);
            } else {
                mostrarError();
            }
        })
        .catch(error => {
            console.error('Error al cargar los datos:', error);
            mostrarError();
        });
});

function mostrarProducto(producto) {
    const contenedor = document.getElementById('producto-detalle');
    contenedor.innerHTML = `
        <div class="card producto-detalle" data-id="${producto.id}">
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <div class="name-price">
                <h2>${producto.nombre}</h2>
                <h3>$${producto.precio.toLocaleString()}</h3>
            </div>
             <button onclick="comprar()">
                COMPRAR
            </button>
              <section class="details-info">
            <p class="description">${producto.descripcion}</p>
        <details><summary>Características:</summary>
           <p>
                ${producto.caracteristicas.map(c => `<li>${c}</li>`).join('')}
            </p>
            </details>
            </section>
        </div>
    `;
}


	    function comprar() {
        // Redirigir a la página de checkout
        window.location.href = "checkout.html";
    }

