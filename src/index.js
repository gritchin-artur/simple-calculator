//variant 1
// const calculatorContainer = document.getElementById('calculator-container');
// const calculatorDisplay = document.getElementById('calculator-display');
// const calculatorBtnModule = document.getElementById('calculator-btn-module');

// const btnArray = [
//     ['7', '8', '9', '-'],
//     ['4', '5', '6', '+'],
//     ['1', '2', '3', '/'],
//     ['AC', '0', '=', '*']
// ];

// btnArray.forEach((btnRow) => {
//     const rowBtn = document.createElement('div');
//     rowBtn.classList.add('rowBtn');

//     btnRow.map((btn) => {
//         const itemBtn = document.createElement('button');
//         itemBtn.classList.add('itemBtn');
//         itemBtn.textContent = btn;

//         if (btn === '-' || btn === '+' || btn === '/' || btn === '*') {
//             itemBtn.style.backgroundColor = 'orange';
//         }

//         if (btn === 'AC' || btn === '=') {
//             itemBtn.style.backgroundColor = '#565454';
//         }

//         itemBtn.addEventListener('click', () => {
//             getCalculate(btn);
//         });

//         rowBtn.appendChild(itemBtn);
//     });

//     calculatorBtnModule.appendChild(rowBtn);
// });

// const displayItem = document.createElement('span');

// displayItem.classList.add('display-item');

// displayItem.innerText = '0';

// calculatorDisplay.appendChild(displayItem);

// let display = '';

// function getCalculate(btn) {
//     if (display === 'error') {
//         display = '';
//         display += btn;
//         displayItem.innerText = display;
//         return;
//     }

//     if (btn === 'AC') {
//         return (displayItem.innerText = '0'), (display = '');
//     }

//     if (btn === '=') {
//         try {
//             display = eval(display).toString();
//         } catch (error) {
//             display = 'error';
//         }
//         return (displayItem.innerText = display);
//     }

//     display += btn;
//     displayItem.innerText = display;
// }

//variant 2
const calculatorContainer = document.getElementById("calculator-container");
const calculatorDisplay = document.getElementById("calculator-display");
const calculatorBtnModule = document.getElementById("calculator-btn-module");

const btnArray = [
  ["7", "8", "9", "-"],
  ["4", "5", "6", "+"],
  ["1", "2", "3", "/"],
    ["AC", "0", "=", "*"],
];

function Button() {
  return `
    ${btnArray
      .map(
        (row) => `
        <div>
          ${row
            .map(
              (btn) =>
                `<button class='itemBtn' id="${btn}" onClick="getCalculate('${btn}')">${btn}</button>`
            )
            .join("")}
        </div>
      `
      )
      .join("")}
  `;
}

calculatorBtnModule.innerHTML = Button();

document.querySelectorAll(".itemBtn").forEach((btnEl) => {
  ColorBtn(btnEl);
});

function ColorBtn(el) {
  const value = el.getAttribute("id");

  const operators = ["-", "+", "/", "*"];

  if (operators.includes(value)) {
    el.style.backgroundColor = "orange";
  }
  if (value === "AC" || value === "=") {
    el.style.backgroundColor = "#565454";
  }
}

const displayItem = document.createElement("span");

displayItem.classList.add("display-item");

displayItem.innerText = "0";

calculatorDisplay.appendChild(displayItem);

let display = "";

function getCalculate(btn) {
    const operators = ["-", "+", "/", "*"];
    
    if (display === "" && operators.includes(btn)) {
        display = "0" + btn;
        displayItem.innerText = display;
        return;
    }

  if (display === "error") {
    display = "";
    display += btn;
    displayItem.innerText = display;
    return;
  }

  if (display.slice(-1) === btn && operators.includes(display.slice(-1))) {
    return displayItem.innerText = display;
    } else if (operators.includes(display.slice(-1)) && operators.includes(btn)) {
       console.log(btn);
      return displayItem.innerText = display.slice(0, -1) + btn;  
  }

  switch (btn) {
      case "AC":
          displayItem.style.fontSize = '5vw';
          (displayItem.innerText = "0");
          (display = "");
          return;
    case "=":
      try {
        display = eval(display).toString();
      } catch (error) {
        display = "error";
      }
      return (displayItem.innerText = display);
  }

  if (display.length > 6) {
    displayItem.style.fontSize = `${33 / display.length}vw`;
  } else if (display.length < 6) {
    displayItem.style.fontSize = '5vw';
  } 

  display += btn;
  displayItem.innerText = display;
}
