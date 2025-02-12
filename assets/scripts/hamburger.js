document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    let debounceTimer;

    if (hamburger && navMenu) {
        const debounce = (func, delay) => {
            return function () {
                const context = this,
                    args = arguments;
                clearTimeout(debounceTimer);
                debounceTimer = setTimeout(
                    () => func.apply(context, args),
                    delay
                );
            };
        };

        const toggleMenu = (event) => {
            event.preventDefault(); // Prevents default touch behavior if needed
            navMenu.classList.toggle("active");
        };

        const debouncedToggleMenu = debounce(toggleMenu, 200); // 200ms delay

        hamburger.addEventListener("click", debouncedToggleMenu);
        hamburger.addEventListener("touchstart", debouncedToggleMenu);
    }
});
