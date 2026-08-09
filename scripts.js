// Typewriter effect
const words = ["Team 30329.", "programmers.", "engineers.", "designers.", "helpers.", "BACK!"];
let wordIndex=0;
let charIndex=0;
let isDeleting=false;
let slideIndex =1;

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

//sticky header scroll logic (index page only)
function handleStickyHeader() {
    const header = document.getElementById("main-header");
    const typewriterContainer = document.querySelector(".typewriter-container");

    //strictly exit if not on index

    if (!typewriterContainer || !header) return;

    window.addEventListener("scroll", function() {
        if (window.scrollY > 60) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });
}

//Carousel logic
function showSlides (n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {slideIndex=1;}
    if (n < 1) { slideIndex = slides.length}

    for (let i=0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i=0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display="block";
    dots[slideIndex-1].className += " active";

}

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function generateLoadNumber() {
    const min = 100000000000000;
    const max = 999999999999999;
    return Math.floor(Math.random() * (max-min+1)) +min;
}
//start effect on page load
document.addEventListener("DOMContentLoaded", () => {
    const ticker = document.querySelector(".ticker-track");

    if (ticker) {
        ticker.innerHTML += ticker.innerHTML;
    }

    const logoLink = document.getElementById("logo-link");

    if (logoLink) {
        logoLink.addEventListener("click",function(event) {
            event.preventDefault();
            const loadValue=generateLoadNumber();
            window.location.href='index.html?unnecessarythingattheendofthelink='+loadValue;
        });
}

    typeEffect();
    handleStickyHeader();
    showSlides(slideIndex);
});

if (ticker) {
    ticker.innerHTML+=ticker.innerHTML;
}
