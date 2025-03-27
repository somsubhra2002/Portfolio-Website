document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const section = document.querySelector(this.getAttribute("href"));
            section.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Fade-in effect on scroll
    window.addEventListener("scroll", function() {
        const elements = document.querySelectorAll(".fade-in");
        elements.forEach(el => {
            const position = el.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            if (position < screenPosition) {
                el.classList.add("visible");
            }
        });
    });
});
