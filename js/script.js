
// Mobile navigation
document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-links");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {

            navMenu.classList.toggle("open");

            const isOpen = navMenu.classList.contains("open");

            menuToggle.textContent = isOpen ? "×" : "☰";
            menuToggle.setAttribute("aria-expanded", isOpen);
        });
    }

});
// Dark and light theme

/* THEME TOGGLE */

/* THEME TOGGLE */
const themeToggle = document.getElementById("theme-toggle");

// Load the saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-theme");
}

// Update the button icon
function updateThemeIcon() {
    if (themeToggle) {
        const isLight = document.body.classList.contains("light-theme");
        themeToggle.textContent = isLight ? "☾" : "☀";
    }
}

updateThemeIcon();

// Switch themes when clicked
if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-theme");

        const isLight = document.body.classList.contains("light-theme");

        localStorage.setItem("theme", isLight ? "light" : "dark");

        updateThemeIcon();
    });
}


// Typing animation
const typingElement = document.getElementById("typing");

if (typingElement) {
    const words = [
        "Software Developer",
        "UX/UI Designer",
        "Digital Creator"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function type() {
        const currentWord = words[wordIndex];

        typingElement.textContent = deleting
            ? currentWord.substring(0, charIndex--)
            : currentWord.substring(0, charIndex++);

        if (!deleting && charIndex > currentWord.length) {
            deleting = true;
            setTimeout(type, 1200);
            return;
        }

        if (deleting && charIndex < 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            charIndex = 0;
        }

        setTimeout(type, deleting ? 60 : 110);
    }

    type();
}

// Footer year
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

/* BLOG CATEGORY FILTERS */

const filterButtons = document.querySelectorAll(".filter-btn");
const blogCards = document.querySelectorAll(".blog-card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        const selectedFilter = button.dataset.filter;

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        blogCards.forEach(card => {
            const category = card.dataset.category;

            if (selectedFilter === "all" || category === selectedFilter) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }
        });
    });
});

