// Update year in footer
document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

// Mobile navigation toggle
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
        nav.classList.toggle("open");
        navToggle.textContent = nav.classList.contains("open") ? "✖" : "☰";
    });
}

// Smooth scroll for navigation links
const navLinks = document.querySelectorAll(".nav a");
navLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const targetId = link.getAttribute("href").split('/').pop().split('.')[0]; // Extract filename
        if (targetId === 'index' || targetId === '') {
            window.location.href = 'index.html';
        } else {
            window.location.href = `${targetId}.html`;
        }

        // Close nav on mobile after click
        if (nav.classList.contains("open")) {
            nav.classList.remove("open");
            navToggle.textContent = "☰";
        }
    });
});