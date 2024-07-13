document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get('search');

    if (searchTerm) {
        fetch('/pages/inventarypage/inventary.html')
            .then(response => response.text())
            .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const cards = doc.querySelectorAll('.card');
                const results = Array.from(cards).filter(card => 
                    card.querySelector('h5').textContent.toLowerCase().includes(searchTerm.toLowerCase())
                );

                const resultsContainer = document.getElementById('searchResults');
                if (results.length > 0) {
                    results.forEach(result => {
                        resultsContainer.appendChild(result.cloneNode(true));
                    });
                } else {
                    resultsContainer.innerHTML = '<p>No se encontraron productos con ese nombre.</p>';
                }
            })
            .catch(error => {
                console.error('Error al cargar los productos:', error);
            });
    }
});