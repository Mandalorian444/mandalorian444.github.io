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
            event.preventDefault();
            navMenu.classList.toggle("active");
            hamburger.classList.toggle("active");
        };

        const debouncedToggleMenu = debounce(toggleMenu, 200);

        hamburger.addEventListener("click", debouncedToggleMenu);
        hamburger.addEventListener("touchstart", debouncedToggleMenu);

        // Close menu when clicking on a menu item
        document.querySelectorAll(".nav-menu a").forEach((item) => {
            item.addEventListener("click", () => {
                navMenu.classList.remove("active");
                hamburger.classList.remove("active");
            });
        });
    }
});
