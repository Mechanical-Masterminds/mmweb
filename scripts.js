// Typewriter effect
const words = ["Team 30329.", "coders.", "engineers.", "designers.", "helpers.", "BACK!"];
let wordIndex=0;
let charIndex=0;
let isDeleting=false;


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

//start effect on page load
document.addEventListener("DOMContentLoaded", typeEffect);