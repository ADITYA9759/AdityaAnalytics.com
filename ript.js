// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
    });
});

// Typing Animation
const text = "Welcome to My Website!";
let index = 0;

function typeEffect() {
    document.getElementById("typing-text").innerText = text.slice(0, index);
    index++;
    if (index <= text.length) {
        setTimeout(typeEffect, 100);
    }
}

window.onload = typeEffect;

// Dark Mode Toggle
document.getElementById("dark-mode-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

// Initialize AOS
AOS.init({
    duration: 1200,
});
