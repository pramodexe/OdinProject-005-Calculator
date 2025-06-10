let firstValue = "";
let secondValue = "";
let operatorValue = "";
let answerValue = "";

// Functions for numeric buttons
function fncn1() {
  const answerDisplay = document.getElementById("answer-display");
  if (answerValue == "") {
    answerDisplay.value += "1";
  }
}
function fncn2() {
  const answerDisplay = document.getElementById("answer-display");
  if (answerValue == "") {
    answerDisplay.value += "2";
  }
}
function fncn3() {
  const answerDisplay = document.getElementById("answer-display");
  if (answerValue == "") {
    answerDisplay.value += "3";
  }
}
function fncn4() {
  const answerDisplay = document.getElementById("answer-display");
  if (answerValue == "") {
    answerDisplay.value += "4";
  }
}
function fncn5() {
  const answerDisplay = document.getElementById("answer-display");
  if (answerValue == "") {
    answerDisplay.value += "5";
  }
}
function fncn6() {
  const answerDisplay = document.getElementById("answer-display");
  if (answerValue == "") {
    answerDisplay.value += "6";
  }
}
function fncn7() {
  const answerDisplay = document.getElementById("answer-display");
  if (answerValue == "") {
    answerDisplay.value += "7";
  }
}
function fncn8() {
  const answerDisplay = document.getElementById("answer-display");
  if (answerValue == "") {
    answerDisplay.value += "8";
  }
}
function fncn9() {
  const answerDisplay = document.getElementById("answer-display");
  if (answerValue == "") {
    answerDisplay.value += "9";
  }
}

// Function for the zero button
function fncn0() {
  const answerDisplay = document.getElementById("answer-display");
  const val = answerDisplay.value;
  if (answerValue == "" && val !== "0") {
    // Only allow adding zero if the display is not already "0"
    answerDisplay.value += "0";
  } else if (val === "0") {
    // If the display is already "0", do nothing
    return;
  }
}

// Function for the decimal point button
function fncn_dot() {
  const answerDisplay = document.getElementById("answer-display");
  if (answerValue == "" && !answerDisplay.value.includes(".")) {
    // Check if there's no decimal point already
    answerDisplay.value += ".";
  }
}

// Functions for clear buttons
function allClear() {
  const upperDisplay = document.getElementById("upper-display");
  const operatorDisplay = document.getElementById("operator-display");
  const lowerDisplay = document.getElementById("lower-display");
  const answerDisplay = document.getElementById("answer-display");
  // Clear all displays
  upperDisplay.value = "";
  operatorDisplay.value = "";
  lowerDisplay.value = "";
  answerDisplay.value = "";
  // Reset global variables
  firstValue = "";
  secondValue = "";
  operatorValue = "";
  answerValue = "";
  answerDisplay.style.borderTop = "2px solid #191c3b";
}
function oneClear() {
  const answerDisplay = document.getElementById("answer-display");
  if (answerValue == "") {
    answerDisplay.value = answerDisplay.value.slice(0, -1);
  }
}

// Function to add first value
function addToFirstValue() {
  if (firstValue === "") {
    const answerDisplay = document.getElementById("answer-display");
    const upperDisplay = document.getElementById("upper-display");
    upperDisplay.value = answerDisplay.value;
    answerDisplay.value = "";
    firstValue = upperDisplay.value;
    console.log("First value:", firstValue);
  }
}

// Function to add second value
function addToSecondValue() {
  if (secondValue === "") {
    const answerDisplay = document.getElementById("answer-display");
    const lowerDisplay = document.getElementById("lower-display");
    lowerDisplay.value = answerDisplay.value;
    answerDisplay.value = "";
    secondValue = lowerDisplay.value;
    console.log("Second value:", secondValue);
  }
}

// Functions for operation buttons
function addition() {
  const operatorDisplay = document.getElementById("operator-display");
  if (operatorValue === "" && firstValue !== "") {
    operatorDisplay.value = "+";
    operatorValue = "+";
  }
}
function subtraction() {
  const operatorDisplay = document.getElementById("operator-display");
  if (operatorValue === "" && firstValue !== "") {
    operatorDisplay.value = "-";
    operatorValue = "-";
  }
}
function multiplication() {
  const operatorDisplay = document.getElementById("operator-display");
  if (operatorValue === "" && firstValue !== "") {
    operatorDisplay.value = "*";
    operatorValue = "*";
  }
}
function division() {
  const operatorDisplay = document.getElementById("operator-display");
  if (operatorValue === "" && firstValue !== "") {
    operatorDisplay.value = "/";
    operatorValue = "/";
  }
}

// Function to calculate the answer
function calculate() {
  const answerDisplay = document.getElementById("answer-display");
  if (firstValue !== "" && secondValue !== "" && operatorValue !== "") {
    let result = "= ";
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(secondValue);

    switch (operatorValue) {
      case "+":
        result += num1 + num2;
        break;
      case "-":
        result += num1 - num2;
        break;
      case "*":
        result += num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          answerDisplay.value = "Error";
          answerDisplay.style.color = "rgb(144, 152, 238)";
          answerDisplay.style.borderTop = "2px solid #fff";
          answerValue = answerDisplay.value;
          return;
        }
        result += parseFloat((num1 / num2).toFixed(8)); // Limit to 8 decimal places
        break;
      default:
        return;
    }

    answerDisplay.value = result.toString();
    answerDisplay.style.color = "rgb(144, 152, 238)";
    answerDisplay.style.borderTop = "2px solid #fff";
    answerValue = answerDisplay.value;
    console.log("Answer:", answerValue);
  }
}
