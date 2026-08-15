// Typewriter effect
const words = ["Team 30329.", "programmers.", "engineers.", "designers.", "helpers.", "BACK!"];
let wordIndex=0;
let charIndex=0;
let isDeleting=false;
let slideIndex =1;

const heroImages = [
    "media/image1.webp",
    "media/image2.webp",
    "media/honda-s2000-sun.jpeg"
];

function typeEffect() {

    const targetElement = document.getElementById("typewriter-text");

    if (!targetElement) return;

    const currentWord = words[wordIndex];
    if (isDeleting) {
        //remove a character
        targetElement.textContent=currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        //Add characters
        targetElement.textContent=currentWord.substring(0, charIndex+1);
        charIndex++;
    }

    //typing speed
    let typeSpeed = isDeleting? 50:100;

    //if complete, pause before deleting
    if (!isDeleting && charIndex===currentWord.length) {
        typeSpeed=2000; //pause at end
        isDeleting=true;
    }

    //if word deleted, move on bucko
    else if (isDeleting && charIndex===0) {
        isDeleting=false;
        wordIndex=(wordIndex+1) % words.length; //loop back to start
        typeSpeed=500;
    }

    setTimeout(typeEffect, typeSpeed);
}


//Carousel logic
function showSlides (n) {
    if (n > heroImages.length) {
        slideIndex=1;
    }

    if (n < 1) {
        slideIndex=heroImages.length;
    }

    const hero = document.querySelector(".hero-section");

    if (!hero) return;

    hero.style.backgroundImage =
        `url("${heroImages[slideIndex - 1]}")`;
}

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}


//start effect on page load
document.addEventListener("DOMContentLoaded", () => {

    const ticker = document.querySelector(".ticker-track");

    if (ticker) {
        ticker.innerHTML += ticker.innerHTML;
    }

    typeEffect();
    showSlides(slideIndex);

    setInterval(() => {
        changeSlide(1);
    },8000);
});