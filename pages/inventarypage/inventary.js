//Filtros-Funcionamiento

document.getElementById('price-min').addEventListener('input', function() {
    document.getElementById('price-min-display').innerText = this.value;
});

document.getElementById('price-max').addEventListener('input', function() {
    document.getElementById('price-max-display').innerText = this.value;
});

document.getElementById('applyFilters').addEventListener('click', function() {
    const brandFilter = document.getElementById('brand').value;
    const priceMinFilter = parseFloat(document.getElementById('price-min').value);
    const priceMaxFilter = parseFloat(document.getElementById('price-max').value);
    const products = document.querySelectorAll('.card');
    
    products.forEach(product => {
        const productBrand = product.getAttribute('data-brand');
        const productPrice = parseFloat(product.getAttribute('data-price'));
        let showProduct = true;
        
        if (brandFilter && productBrand !== brandFilter) {
            showProduct = false;
        }
        
        if (productPrice < priceMinFilter || productPrice > priceMaxFilter) {
            showProduct = false;
        }
        
        if (showProduct) {
            product.style.display = 'flex';
        } else {
            product.style.display = 'none';
        }
    });
});


document.getElementById('resetFilters').addEventListener('click', function() {
    document.getElementById('brand').value = '';
    document.getElementById('price-min').value = 5000;
    document.getElementById('price-max').value = 50000;
    document.getElementById('price-min-display').innerText = 5000;
    document.getElementById('price-max-display').innerText = 50000;

    const products = document.querySelectorAll('.card');
    products.forEach(product => {
        product.style.display = 'flex';
    });
});



