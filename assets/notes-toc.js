document.addEventListener('DOMContentLoaded', function() {
  const tocMenu = document.getElementById('notes-toc-menu');
  if (!tocMenu) return;

  // Find main element that contains the actual content
  const main = document.querySelector('main');
  if (!main) return;

  // Extract all headings from the entire main content
  const headings = main.querySelectorAll('h1, h2, h3, h4, h5, h6');

  if (headings.length === 0) {
    tocMenu.style.display = 'none';
    return;
  }

  // Generate IDs for headings if they don't have them
  headings.forEach((heading, index) => {
    if (!heading.id) {
      heading.id = `heading-${index}`;
    }
  });

  // Create the menu structure
  const tocContainer = document.createElement('div');
  tocContainer.className = 'toc-items';

  headings.forEach(heading => {
    const level = parseInt(heading.tagName[1]);
    
    const item = document.createElement('a');
    item.href = `#${heading.id}`;
    item.textContent = heading.textContent;
    item.className = `toc-item toc-level-${level}`;
    
    item.addEventListener('click', function(e) {
      e.preventDefault();
      heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    tocContainer.appendChild(item);
  });

  tocMenu.appendChild(tocContainer);

  // Add home button (bottom left)
  const homeButton = document.createElement('a');
  homeButton.className = 'home-button';
  homeButton.href = '/notes';
  homeButton.textContent = '← Notes';
  document.body.appendChild(homeButton);

  // Add back to top button (bottom right)
  const backToTop = document.createElement('a');
  backToTop.className = 'back-to-top';
  backToTop.textContent = '↑ Top';
  document.body.appendChild(backToTop);

  backToTop.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Show/hide back to top button based on scroll position
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });
});
