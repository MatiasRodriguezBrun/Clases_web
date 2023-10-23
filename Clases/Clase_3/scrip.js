const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value;
    // Aquí puedes realizar la lógica de búsqueda y mostrar los resultados en searchResults
    // Puedes usar una API o procesar los resultados localmente y mostrarlos usando innerHTML
    searchResults.innerHTML = `Resultados para: ${searchTerm}`;
});
    