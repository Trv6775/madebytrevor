
// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("open");
        menuToggle.textContent =
            navMenu.classList.contains("open") ? "×" : "☰";
    });
}

// Dark and light theme
const themeToggle = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
}

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light");

        const theme = document.body.classList.contains("light")
            ? "light"
            : "dark";

        localStorage.setItem("theme", theme);
    });
}

// Typing animation
const typingElement = document.getElementById("typing");

if (typingElement) {
    const words = [
        "Software Developer",
        "Web Developer",
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

