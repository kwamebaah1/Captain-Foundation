// JavaScript to handle navigation between gallery years

// All galleries based on year
const galleries = document.querySelectorAll('.gallery[data-year]');
let currentYearIndex = 0; // Start with the first year (2018)

const years = Array.from(galleries).map(gallery => parseInt(gallery.getAttribute('data-year')));
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

// Function to update the visible gallery
function updateGallery(index) {
  // Hide all galleries
  galleries.forEach(gallery => gallery.style.display = 'none');
  
  // Show the current gallery
  galleries[index].style.display = 'grid';
}

// Initialize the first visible gallery
updateGallery(currentYearIndex);

// Arrow navigation
arrowLeft.addEventListener('click', () => {
  if (currentYearIndex > 0) {
    currentYearIndex--;
    updateGallery(currentYearIndex);
  }
});

arrowRight.addEventListener('click', () => {
  if (currentYearIndex < years.length - 1) {
    currentYearIndex++;
    updateGallery(currentYearIndex);
  }
});