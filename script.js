
var expression = "";

function updateScreen(value) {
    var screen = document.getElementById("screen");
    expression += value;
    screen.value = expression;
}

function calculate() {
    var screen = document.getElementById("screen");
    try {
        expression = eval(expression).toString();
        screen.value = expression;
    } catch {
        screen.value = "Error";
        expression = ""; // Clear expression on error
    }
}

function clearAll() {
    expression = "";
    document.getElementById("screen").value = "";
}

function clearLast() {
    expression = expression.slice(0, -1);
    document.getElementById("screen").value = expression;
}