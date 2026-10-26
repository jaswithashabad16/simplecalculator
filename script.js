const display = document.getElementById("display");

function add(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = Function('"use strict"; return (' + display.value + ')')();
  } catch {
    display.value = "Error";
  }
}
