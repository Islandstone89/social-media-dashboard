
let toggle = document.getElementById("toggle");


/* function toggleSwitch() {
    if (toggle.getAttribute("data-theme-mode") === "light") {
        toggle.setAttribute("data-theme-mode", "dark")
    }

    else {
        toggle.setAttribute("data-theme-mode", "light")
    }
} */



/* toggle.addEventListener("click", toggleSwitch); */


function toggleSwitch2() {
    if (toggle.getAttribute("aria-checked") === "false") {
        toggle.setAttribute("aria-checked", "true")
    }

    else {
        toggle.setAttribute("aria-checked", "false")
    }
}



toggle.addEventListener("click", toggleSwitch2);

