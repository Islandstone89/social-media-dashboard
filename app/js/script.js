
/* let toggleDiv = document.getElementById(".introToggle"); */
let toggle = document.getElementById("toggle");
let toggleLabel = document.getElementById("toggleLabel");


function toggleSwitch() {
    if (toggle.getAttribute("data-theme-mode") === "light") {
        toggle.setAttribute("data-theme-mode", "dark")
    }

    else {
        toggle.setAttribute("data-theme-mode", "light")
    }
}

toggle.addEventListener("click", toggleSwitch);

