/* =========================================================
   GYANODAYA BAL BATIKA
   INTERACTIONS & ANIMATIONS
   ========================================================= */


/* =========================
   DARK MODE
========================= */

const darkModeToggle = document.getElementById("darkModeToggle");

function updateDarkModeButton() {
    if (!darkModeToggle) return;

    if (document.body.classList.contains("dark-mode")) {
        darkModeToggle.textContent = "☀️";
        darkModeToggle.setAttribute("aria-label", "Switch to light mode");
    } else {
        darkModeToggle.textContent = "🌙";
        darkModeToggle.setAttribute("aria-label", "Switch to dark mode");
    }
}


/* Load saved theme */

if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
}

updateDarkModeButton();


/* Toggle theme */

if (darkModeToggle) {

    darkModeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        const darkModeEnabled =
            document.body.classList.contains("dark-mode");

        localStorage.setItem(
            "darkMode",
            darkModeEnabled ? "enabled" : "disabled"
        );

        updateDarkModeButton();

    });

}


/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const navbar = document.querySelector(".navbar");

function updateNavbar() {

    if (!navbar) return;

    if (window.scrollY > 20) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

}

window.addEventListener("scroll", updateNavbar);

updateNavbar();


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
    ".photo-card, .academic-card, .value-card, .contact-card, .map-card, .section-heading"
);

revealElements.forEach((element) => {
    element.classList.add("reveal-on-scroll");
});


const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("reveal");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
    }
);


document
    .querySelectorAll(".reveal-on-scroll")
    .forEach((element) => {
        revealObserver.observe(element);
    });


/* =========================
   STAGGER CARD ANIMATIONS
========================= */

const cardGroups = [
    ".photo-grid .photo-card",
    ".academic-grid .academic-card",
    ".values-grid .value-card"
];

cardGroups.forEach((selector) => {

    const cards = document.querySelectorAll(selector);

    cards.forEach((card, index) => {

        card.style.transitionDelay = `${index * 0.08}s`;

    });

});


/* =========================
   HISTORY TIMELINE
========================= */

const timelineItems =
    document.querySelectorAll(".timeline-item");


const timelineObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("reveal");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


timelineItems.forEach((item, index) => {

    item.style.transitionDelay = `${index * 0.15}s`;

    timelineObserver.observe(item);

});


/* =========================
   SMOOTH INTERNAL LINKS
========================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId = link.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* =========================
   IMAGE LOAD EFFECT
========================= */

document.querySelectorAll("img").forEach((image) => {

    if (image.complete) {
        image.classList.add("loaded");
    } else {

        image.addEventListener("load", () => {
            image.classList.add("loaded");
        });

    }

});


/* =========================
   MOUSE PARALLAX FOR HERO IMAGE
========================= */

const heroImage = document.querySelector(".hero-image");

if (heroImage && window.matchMedia("(min-width: 901px)").matches) {

    heroImage.addEventListener("mousemove", (event) => {

        const rect = heroImage.getBoundingClientRect();

        const x =
            (event.clientX - rect.left) / rect.width - 0.5;

        const y =
            (event.clientY - rect.top) / rect.height - 0.5;

        heroImage.style.transform =
            `perspective(900px)
             rotateY(${x * 4}deg)
             rotateX(${y * -4}deg)`;

    });


    heroImage.addEventListener("mouseleave", () => {

        heroImage.style.transform =
            "perspective(900px) rotateY(0deg) rotateX(0deg)";

    });

}


/* =========================
   PAGE ENTRY
========================= */

document.body.classList.add("page-loaded");


/* =========================
   ACTIVE NAVIGATION
========================= */

const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".nav-links a").forEach((link) => {

    const linkPage =
        link.getAttribute("href");

    if (linkPage === currentPage) {

        link.classList.add("active");

    }

});


/* =========================
   EXTERNAL LINKS
========================= */

document
    .querySelectorAll('a[target="_blank"]')
    .forEach((link) => {

        link.setAttribute("rel", "noopener noreferrer");

    });


/* =========================
   CONSOLE MESSAGE
========================= */

console.log(
    "%cGyanodaya Bal Batika",
    "font-size:20px;font-weight:bold;color:#d4a017;"
);

console.log(
    "%cWelcome to the school website!",
    "font-size:13px;color:#627d98;"
);
