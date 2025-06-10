// Functions for numeric buttons
function fncn1() {
  const display = document.getElementById("answer-display");
  display.value += "1";
}
function fncn2() {
  const display = document.getElementById("answer-display");
  display.value += "2";
}
function fncn3() {
  const display = document.getElementById("answer-display");
  display.value += "3";
}
function fncn4() {
  const display = document.getElementById("answer-display");
  display.value += "4";
}
function fncn5() {
  const display = document.getElementById("answer-display");
  display.value += "5";
}
function fncn6() {
  const display = document.getElementById("answer-display");
  display.value += "6";
}
function fncn7() {
  const display = document.getElementById("answer-display");
  display.value += "7";
}
function fncn8() {
  const display = document.getElementById("answer-display");
  display.value += "8";
}
function fncn9() {
  const display = document.getElementById("answer-display");
  display.value += "9";
}

// Function for the zero button
function fncn0() {
  const display = document.getElementById("answer-display");
  const val = display.value;
  if (val === "") {
    // Empty input: allow a single "0"
    display.value = "0";
  } else if (val === "0") {
    // Already has a single "0": prevent more leading zeros
    return;
  } else {
    // All other scenarios: allow adding "0"
    display.value += "0";
  }
}

// Function for the decimal point button
function fncn_dot() {
  const display = document.getElementById("answer-display");
  if (!display.value.includes(".")) {
    // Check if there's no decimal point already
    display.value += ".";
  }
}

// Functions for clear buttons
function fncn_ac() {
  const display = document.getElementById("answer-display");
  display.value = "";
}
function fncn_c() {
  const display = document.getElementById("answer-display");
  display.value = display.value.slice(0, -1);
}
