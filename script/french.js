const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')
const links = document.querySelectorAll('.nav-links li')
const header = document.querySelector("header")

// toggle nav
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open')
    links.forEach(link => {
        link.classList.toggle('fade')
    })
    // burger animated cross
    hamburger.classList.toggle('toggle')
    // after a link clicked allows user to click on burger cross to reach the section
    header.classList.toggle("open")
})


function salutations() {
    if (new Date().getHours() >= 2 && new Date().getHours() < 12) {
        salutations = "Hey, bonjour !<br>Je suis Nathalie.";
    } else if (new Date().getHours() >= 12 && new Date().getHours() < 18) {
        salutations = "Hey, bon après-midi !<br>Je suis Nathalie.";
    } else {
        salutations = "Hey, bonsoir !<br>Je suis Nathalie.";
    }
    // careful with security issues using innerHTML (user input only?)
    document.getElementById("salutations").innerHTML = salutations;
}
salutations();



// dark/light switch
const darkMode = document.getElementById('toggle')
darkMode.addEventListener('change' , () => {
    document.body.classList.toggle('dark')
})


let carousel = document.getElementById("carousel")
slides = carousel.getElementsByClassName("slider")
counter = 0

setInterval(function () {
  slides[counter].style.opacity = 0; // Hide the previous image
  counter = (counter + 1) % slides.length; // Increment counter
  slides[counter].style.opacity = 1; // Show the next image
}, 3000); // setInterval


// console.log(++[[]][+[]]+[+[]]);
// outputs 10