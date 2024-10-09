const buttons = document.querySelectorAll(".btn");
const slides = document.querySelectorAll(".slide");

// Tableau d'image : [0, 1, 2]

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const calcNextSlide = e.target.id === "next" ? 1 : -1;
    const slideActive = document.querySelector(".active");

    newIndex = calcNextSlide + [...slides].indexOf(slideActive);

    if (newIndex < 0) newIndex = [...slides].length - 1;
    if (newIndex >= [...slides].length) newIndex = 0;
    slides[newIndex].classList.add("active");

    slideActive.classList.remove("active");
  });
});


// Script pour le carrousel automatique du header
let headerSlides = document.querySelectorAll('.carousel-header .carousel-slide');
let currentSlide = 0;

function showSlide(index) {
    headerSlides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % headerSlides.length;
    showSlide(currentSlide);
}

// Change de slide toutes les 3 secondes
setInterval(nextSlide, 3000);

// Affiche le premier slide au démarrage
showSlide(currentSlide);
