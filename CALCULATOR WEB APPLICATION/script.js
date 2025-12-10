let display = document.getElementById("display");

// Button Handling
let buttons = document.querySelectorAll("input[type=button]");

buttons.forEach(btn => {
    btn.addEventListener("click", () => handle(btn.value));
});

// Main Handler
function handle(value) {

    if (value === "AC") {
        display.value = "";
    }

    else if (value === "DE") {
        display.value = display.value.slice(0, -1);
    }

    else if (value === "=") {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Error";
        }
    }

    else {
        display.value += value;
    }
}

// Keyboard Handling
document.addEventListener("keydown", (e) => {
    const key = e.key;

    if (!isNaN(key) || "+-*/.".includes(key)) {
        display.value += key;
    }
    else if (key === "Enter") {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Error";
        }
    }
    else if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }
    else if (key === "Escape") {
        display.value = "";
    }
});
