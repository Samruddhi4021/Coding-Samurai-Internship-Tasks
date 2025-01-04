// Smooth scroll to menu section
function scrollToMenu() {
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
}
function toggleSearch() {
    const search = document.querySelector('.search');
    search.classList.toggle('active');
}

document.addEventListener('click', function(event) {
    const search = document.querySelector('.search');
    
    // If the click is outside of the search container, remove the active class
    if (!search.contains(event.target)) {
        search.classList.remove('active');
    }
});

// Prevent the search bar from closing when clicking inside the search input
const searchInput = document.querySelector('.search input');
searchInput.addEventListener('click', function(event) {
    event.stopPropagation();  // Prevent the click event from propagating to the document
});