let searchIndex = null;

async function initializeSearch() {
  try {
    const response = await fetch('/search.json');
    const documents = await response.json();
    
    // Build Lunr index
    searchIndex = lunr(function() {
      this.ref('url');
      this.field('title', { boost: 10 });
      this.field('category', { boost: 5 });
      this.field('tags', { boost: 5 });
      this.field('content');
      
      documents.forEach(doc => {
        this.add(doc);
      });
    });
  } catch (error) {
    console.error('Error initializing search:', error);
  }
}

function performSearch(query) {
  if (!searchIndex || !query.trim()) {
    clearResults();
    return;
  }
  
  const results = searchIndex.search(query);
  displayResults(results);
}

function displayResults(results) {
  const resultsContainer = document.getElementById('search-results');
  
  if (results.length === 0) {
    resultsContainer.innerHTML = '<p>No results found.</p>';
    resultsContainer.style.display = 'block';
    return;
  }
  
  let html = '<ul>';
  results.forEach(result => {
    const doc = getDocumentByUrl(result.ref);
    if (doc) {
      html += `<li><a href="${doc.url}">${doc.title}</a> <em>(${doc.date})</em></li>`;
    }
  });
  html += '</ul>';
  
  resultsContainer.innerHTML = html;
  resultsContainer.style.display = 'block';
}

function clearResults() {
  const resultsContainer = document.getElementById('search-results');
  resultsContainer.innerHTML = '';
  resultsContainer.style.display = 'none';
}

function getDocumentByUrl(url) {
  // This would need the documents array to be globally accessible
  // We'll store it when initializing
  return window.searchDocuments.find(doc => doc.url === url);
}

async function initializeSearchFull() {
  try {
    const response = await fetch('/search.json');
    const documents = await response.json();
    
    // Store documents globally for reference
    window.searchDocuments = documents;
    
    // Build Lunr index
    searchIndex = lunr(function() {
      this.ref('url');
      this.field('title', { boost: 10 });
      this.field('category', { boost: 5 });
      this.field('tags', { boost: 5 });
      this.field('content');
      
      documents.forEach(doc => {
        this.add(doc);
      });
    });
  } catch (error) {
    console.error('Error initializing search:', error);
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initializeSearchFull);

// Attach search handler to input
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', function(e) {
      performSearch(e.target.value);
    });
  }
});
