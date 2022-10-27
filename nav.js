const primaryNav = document.querySelector('.primary-navigation');
const screenCover = document.querySelector('.nav-black-screen');
const navToggle = document.querySelector('.mobile-nav-toggle');
const navToggle1 = document.querySelector('#nav-toggle-1');
const navToggle2 = document.querySelector('#nav-toggle-2');
const paperTear = document.querySelector('.paper-tear-effect');
const galleryImage1 = document.querySelector('#image-1');
const imageDisplay = document.querySelector('.image-display');
const imageZoom = document.querySelector('.image-zoom');
const imageExitBtn = document.querySelector('.image-exit-btn');


navToggle.addEventListener('click', () => {
    navToggleFunction();
});

screenCover.addEventListener('click', () => {
    navToggleFunction();
});

galleryImage1.addEventListener('click', () => {
    showImageToggle();
});

imageZoom.addEventListener('click', () => {
    showImageToggle();
});

imageExitBtn.addEventListener('click', () => {
    showImageToggle();
});

function showImageToggle() {

    const visibilityImage = imageDisplay.getAttribute('data-visible');

    if (visibilityImage === "false") {
        imageDisplay.setAttribute('data-visible', "true");
        
    }
    else if (visibilityImage === "true") {
        imageDisplay.setAttribute('data-visible', "false");
        

    }



}


function navToggleFunction() {
    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === "false") {
        primaryNav.setAttribute('data-visible', "true");
        navToggle.setAttribute('aria-expanded', "true");

        // Change button to menu btn

        // remove class 'fa-bars', add class 'fa-x'
        navToggle1.classList.replace("fa-bars", "fa-x");
        navToggle2.classList.replace("fa-bars", "fa-x");

        // remove black thing
        screenCover.classList.remove('not-visible');

        // hide paper tear
        paperTear.classList.remove('not-visible');

        
    }
    else if (visibility === "true") {
        primaryNav.setAttribute('data-visible', "false");
        navToggle.setAttribute('aria-expanded', "false");

        // Change button to X
        navToggle1.classList.replace("fa-x", "fa-bars");
        navToggle2.classList.replace("fa-x", "fa-bars");

        // show black thing
        screenCover.classList.add('not-visible');

        // show paper tear
        paperTear.classList.add('not-visible');
        

    }
}