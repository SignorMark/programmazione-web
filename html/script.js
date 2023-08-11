
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

//  listener per il click sul menu
navToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});
