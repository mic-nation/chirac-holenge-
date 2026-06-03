const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

function animateCounter(element, target, duration) {
    let start = 0;
    let increment = target / (duration / 20);

    let counter = setInterval(() => {
        start += increment;

        if (start >= target) {
            element.textContent = target + "+";
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 20);
}

// Observer scroll (Intersection Observer = moderne)
const statsSection = document.querySelector(".stats-section");

let started = false;

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !started) {
            started = true;

            // afficher section (fade + zoom)
            statsSection.classList.add("show");

            // lancer les compteurs
            const stats = document.querySelectorAll(".stat-box h3");

            animateCounter(stats[0], 150, 1500);
            animateCounter(stats[1], 200, 1500);
            animateCounter(stats[2], 100, 1500);
        }
    });
}, {
    threshold: 0.4
});

observer.observe(statsSection);