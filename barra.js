const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

searchInput.addEventListener('input', function() {
  const searchValue = this.value.toLowerCase();

  if (searchValue.length > 0) {
    // Simulando resultados de búsqueda
    const results = ['battlefield4', 'call of duty black ops', 'Resultado 3', 'Resultado 4'];

    const matchedResults = results.filter(function(result) {
      return result.toLowerCase().includes(searchValue);
    });

    showSearchResults(matchedResults);
  } else {
    hideSearchResults();
  }
});

function showSearchResults(results) {
  searchResults.innerHTML = '';

  results.forEach(function(result) {
    const li = document.createElement('li');
    li.textContent = result;
    searchResults.appendChild(li);
  });

  searchResults.style.display = 'block';
}

function hideSearchResults() {
  searchResults.style.display = 'none';
}
