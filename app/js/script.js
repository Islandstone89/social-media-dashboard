
let toggle = document.getElementById("toggle");
let toggleLabel = document.getElementById("toggleLabel");


function toggleSwitch() {
    if (toggleLabel.getAttribute("data-theme-mode") === "light") {
        toggleLabel.setAttribute("data-theme-mode", "dark")
    }

    else {
        toggleLabel.setAttribute("data-theme-mode", "light")
    }
}

toggle.addEventListener("click", toggleSwitch);

