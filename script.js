/* toggle style switcher */
const toggler = document.querySelector(".style-switcher-toggler");

if(toggler){
    toggler.addEventListener("click", () => {
        document.querySelector(".style-switcher").classList.toggle("open");
    });
}

/* hide style switcher on scroll */
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
});

/* theme colors with localStorage */
const alternatestyles = document.querySelectorAll(".alternate-style");

function setactivestyle(color){
    localStorage.setItem("color", color);
    changecolor();
}

function changecolor(){
    alternatestyles.forEach((style) => {
        if(localStorage.getItem("color") === style.getAttribute("title")){
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}

/* check color on page load */
window.addEventListener("load", () => {
    if(localStorage.getItem("color") !== null){
        changecolor();
    }
});

/* typing animation */
var typed = new Typed(".typing", {
    strings: ["Web Designer","Web Developer","Graphics Designer","Youtuber"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});







const toggleBtn = document.getElementById("toggle-icon");

// Load saved mode
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    toggleBtn.classList.replace("fa-moon", "fa-sun");
}

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        toggleBtn.classList.replace("fa-moon", "fa-sun");
        localStorage.setItem("theme", "dark");
    } else {
        toggleBtn.classList.replace("fa-sun", "fa-moon");
        localStorage.setItem("theme", "light");
    }
});














