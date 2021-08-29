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

// dark/light switch
const darkMode = document.getElementById('toggle')
darkMode.addEventListener('change' , () => {
    document.body.classList.toggle('dark')
})

function greetings() {
    if (new Date().getHours() >= 2 && new Date().getHours() < 12) {
        greets = "Hey, good morning!<br>I'm Nathalie."
    } else if (new Date().getHours() >= 12 && new Date().getHours() < 18) {
        greets = "Hey, good afternoon!<br>I'm Nathalie."
    } else {
        greets = "Hey, good evening!<br>I'm Nathalie."
    }
    // careful with security issues using innerHTML (user input only?)
    document.getElementById("greetings").innerHTML = greets
}
greetings()

let carousel = document.getElementById("carousel")
slides = carousel.getElementsByClassName("slider")
counter = 0

setInterval(function () {
  slides[counter].style.opacity = 0; // Hide the previous image
  counter = (counter + 1) % slides.length; // Increment counter
  slides[counter].style.opacity = 1; // Show the next image
}, 3000); // setInterval

// let content = document.getElementsByTagName('body')[0]
// let darkMode = document.getElementById('dark-light')
// darkMode.addEventListener('click', () => {
//     darkMode.classList.toggle('active')
//     content.classList.toggle('night')
// })

// ----------------------------------------------------------------

// Modulus operator
// let simple_math = 25 % 6;
// document.getElementById("landing").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_math;

// Negation operator
// let x = 10;
// document.getElementById("landing").innerHTML = -x;

// Increment operator ++ / Decrement operator --
// let x = 5;
// x++;
// // document.getElementById("landing").innerHTML = x;
// // document.write(x);
// // console.log(x);
// alert(x);

// Dictionary + delete
// let animal = {
//     species: "dog",
//     color: "black",
//     breed: "Labrador",
//     sound: "Bark!"
// };
// alert(animal.sound);
// document.getElementById("landing").innerHTML = animal.sound; 
// delete animal.sound;
// console.log(animal.breed, animal.sound);

// typeof
// console.log(typeof "This is a str");
// console.log(typeof 21);

// isNaN function
// console.log(isNaN("Hi!"));
// console.log(isNaN(21));

// concat()
// let one = "I ";
// let two = "love ";
// let three = "you.";
// let wholeSentence = one.concat(two, three);
// document.getElementById("softskills").innerText = wholeSentence;

// slice()
// let sentence = "All you need is love.";
// let extract = sentence.slice(16, 20);
// document.getElementById("softskills").textContent = extract;
// console.log(extract);

// timer countdown
// in HTLM: 
// <p>How many seconds would you like to set your alarm for?</p>
// <input id="seconds" value=""/>
// <button onclick="countdown()">Click here</button>
// <p id="timer"></p>
// function countdown() {
//     let seconds = document.getElementById("seconds").value;
//     function  tick() {
//         seconds = seconds -1;
//         TimeRanges.innerHTML = seconds;
//         //programme pauses for 1,000 milliseconds i.e. 1 second
//         setTimeout(tick, 1000);
//         if (seconds == -1) {
//             alert("Time's up!");
//         }
//     }
//     tick();
// }
