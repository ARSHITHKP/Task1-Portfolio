// Toggle navbar for small screens
const navToggle = document.createElement("div");
navToggle.innerHTML = "☰";
navToggle.style.color = "white";
navToggle.style.fontSize = "1.5rem";
navToggle.style.cursor = "pointer";

const nav = document.querySelector("nav");
const ul = document.querySelector("nav ul");

nav.insertBefore(navToggle, ul);

navToggle.addEventListener("click", () => {
  ul.classList.toggle("show");
});