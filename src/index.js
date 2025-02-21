const calculatorContainer = document.getElementById("calculator-container");
const calculatorDisplay = document.getElementById("calculator-display");
const calculatorBtnModule = document.getElementById("calculator-btn-module");

const btnArray = [
  ["7", "8", "9", "-"],
  ["4", "5", "6", "+"],
  ["1", "2", "3", "/"],
  ["AC", "0", "=", "*"]
];

btnArray.forEach((btnRow) => {
  const rowBtn = document.createElement("div");
  rowBtn.classList.add("rowBtn");

  btnRow.map((btn) => {
    const itemBtn = document.createElement("button");
    itemBtn.classList.add("itemBtn");
    itemBtn.textContent = btn;

    itemBtn.addEventListener("click", () => {
      getCalculate(btn);
    });

    rowBtn.appendChild(itemBtn);
  });

  calculatorBtnModule.appendChild(rowBtn);
});



const displayItem = document.createElement('span');

displayItem.classList.add('display-item');

displayItem.innerText = "0";

calculatorDisplay.appendChild(displayItem);

let display = "";

function getCalculate(btn) {
    if (display === "error") {
        display = "";
        display += btn;
             displayItem.innerText = display;
        return;
    }
    
  if (btn === "AC") {
   return displayItem.innerText = "0",
    display = "";
  }
    
  if (btn === "=") {
    try {
      display = eval(display).toString();
    } catch (error) {
      display = "error";
    }
      return displayItem.innerText = display;
  }
    
display += btn;
  displayItem.innerText = display;

}

