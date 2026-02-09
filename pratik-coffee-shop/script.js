const menu = document.querySelector(".main-menu");
const openBtn = document.getElementById("menu-open-button");
const closeBtn = document.getElementById("menu-close-button");

function isMobile() {
    return window.innerWidth <= 900;
}

// Open menu (mobile only)
openBtn.addEventListener("click", () => {
    if (isMobile()) {
        menu.classList.add("active");
    }
});

// Close menu (mobile only)
closeBtn.addEventListener("click", () => {
    if (isMobile()) {
        menu.classList.remove("active");
    }
});

// Reset menu when resizing to desktop
window.addEventListener("resize", () => {
    if (!isMobile()) {
        menu.classList.remove("active");
    }
});

// Sliding testimonials
const track = document.querySelector(".testimonial-track");
const cards = document.querySelectorAll(".testimonial-card");

let index = 0;
const cardWidth = 350;

function updateCarousel() {
    track.style.transform = `translateX(-${index * cardWidth}px)`;

    cards.forEach(card => card.classList.remove("active"));
    cards[index + 1]?.classList.add("active");
}

function slideRight() {
    if (index < cards.length - 3) {
        index++;
        updateCarousel();
    }
}

function slideLeft() {
    if (index > 0) {
        index--;
        updateCarousel();
    }
}

updateCarousel();

