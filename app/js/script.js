
let toggle = document.getElementById("toggle");

function toggleSwitch() {
    if (toggle.getAttribute("aria-checked") === "false") {
        toggle.setAttribute("aria-checked", "true")
    }

    else {
        toggle.setAttribute("aria-checked", "false")
    }
}

toggle.addEventListener("click", toggleSwitch);

