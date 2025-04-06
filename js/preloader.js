/* Preloader Script for Evaara Resorts */
document.addEventListener('DOMContentLoaded', function() {
  // Get the preloader element
  const preloader = document.querySelector('.preloader');
  
  // Function to hide preloader
  function hidePreloader() {
    preloader.classList.add('loaded');
    // Remove preloader from DOM after transition completes
    setTimeout(function() {
      preloader.style.display = 'none';
    }, 500); // Match this timing with the CSS transition duration
  }
  
  // Hide preloader when page is fully loaded
  window.addEventListener('load', function() {
    // Add a small delay for smoother transition
    setTimeout(hidePreloader, 1000);
  });
  
  // Fallback: Hide preloader after 5 seconds even if page hasn't fully loaded
  setTimeout(hidePreloader, 5000);
});