import { stateFacts, cityFacts, getRandomFact } from "./constants.js";

// elements and constants
const hamburgerBtn = document.querySelector(".hamburger");
const mainNavigation = document.querySelector(".main-navigation");
const hamburgerMenu = document.querySelector(".hamburger__wrapper");
const hamburgerLines = document.querySelectorAll(".hamburger__line");
const footerYear = document.getElementById("year");
const year = new Date().getFullYear();

// get the current url path to handle the city name
const path = window.location.pathname.split("/").pop();
const pageName = path.replace(".html", "");

// on DOM load, set the text content of the random fact depending on the page
if (pageName === "index") {
  const stateFactContainer = document.getElementById("state-facts__text");
  stateFactContainer.innerHTML = getRandomFact(stateFacts);
}

if (Object.keys(cityFacts).includes(pageName)) {
  const cityFactContainer = document.getElementById("city-facts__text");
  cityFactContainer.innerHTML = getRandomFact(cityFacts[pageName]);
}

// add an on click event listener to the hamburger menu
hamburgerBtn.addEventListener("click", () => {
  // toggle the varios classes to open and close the menu
  mainNavigation.classList.toggle("expand");
  hamburgerMenu.classList.toggle("open");

  // toggle each class for the hamburger lines so it makes the X when open
  hamburgerLines.forEach((line, index) => {
    line.classList.toggle(`bar-${index + 1}`);
  });
});

// set the text dynaimcally with the current year
footerYear.innerHTML = year;

// set the background image of the middle sections depending on the page
if (pageName === "index" || Object.keys(cityFacts).includes(pageName)) {
  const cityBackground = document.querySelector(".info-bg");
  cityBackground.style.backgroundImage = `url(/images/${pageName}-bg.png)`;
}
