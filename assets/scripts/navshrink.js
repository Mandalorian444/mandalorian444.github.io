document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const shrinkThreshold = 100; // The point at which the navbar starts to shrink, in pixels

    // Function to handle scroll event
    function handleScroll() {
        if (window.scrollY > shrinkThreshold) {
            navbar.classList.add('shrink');
        } else {
            navbar.classList.remove('shrink');
        }
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
});