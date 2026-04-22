const styleswitchertoggle = document.querySelector(".style-switcher-toggler");

if(styleswitchertoggle){
    styleswitchertoggle.addEventListener("click", () => {
        document.querySelector(".style-switcher").classList.toggle("open");
    });
}

window.addEventListener("scroll", () => {
    const switcher = document.querySelector(".style-switcher");
    if(switcher && switcher.classList.contains("open")){
        switcher.classList.remove("open");
    }
});

const alternatestyles = document.querySelectorAll(".alternate-style");

function setactivestyle(color){
    localStorage.setItem("color", color);
    alternatestyles.forEach((style) => {
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}

const daynight = document.querySelector(".day-night");

if(daynight){
    daynight.addEventListener("click", () => {
        daynight.querySelector("i").classList.toggle("fa-sun");
        daynight.querySelector("i").classList.toggle("fa-moon");
        document.body.classList.toggle("dark");
    });
}

window.addEventListener("load", () => {
    const savedColor = localStorage.getItem("color");
    if(savedColor){
        setactivestyle(savedColor);
    }

    if(daynight){
        if(document.body.classList.contains("dark")){
            daynight.querySelector("i").classList.add("fa-sun");
        } else {
            daynight.querySelector("i").classList.add("fa-moon");
        }
    }
});