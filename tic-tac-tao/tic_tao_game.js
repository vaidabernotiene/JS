const WINNING_COMBINATIONS = [
  [0, 1, 2], // horizontal
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], // vertical
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], // diagonal
  [2, 4, 6],
];

//Pradinis palanas:
//1. Padaryti, kad paspaudus ant laukelio įdėtu X arba O
//2. Kai įdedamas X ar O tikrinti ar yra laimėtojas. WINNING_COMBINATIONS yra sąrašas kombinacijų, kurios jei atitinka laimėjo (pagalvokit kaip jis gali veikti :) taip, aš irgi užtrukau kol supratau)
//3 Kai kažkas, tai pranešti laimėtoją

//Dar padaryti, kai bus pdaryta viskas:
//lygiosios
//pradėti iš naujo
//sekti rezultatus, kas kiek kartų laimėjo (jei dar nebūsum praėję, papasakoti apie local storage, session storage)

const boardEl = document.getElementById("board");
const cellEl = document.querySelectorAll("[data-cell]");
console.log(cellEl); // Nodelist
const cellArr = Array.from(cellEl);
console.log(cellArr); // Array

const winMsg = document.getElementById("winningMessage");
const winMsgText = document.querySelector("[data-winning-message-text]");
const restBtn = document.getElementById("restartButton");

const xEl = "X";
const oEl = "O";
let first = false;
let count = 0;

const disablBtn = () => {
  winMsg.style.display = "flex";
  winMsgText.innerText = first == true ? xEl + ` won!` : oEl + ` won!`;
};

// restart function
restBtn.addEventListener("click", () => {
  cellArr.forEach((element) => {
    element.innerText = "";
    element.style.backgroundColor = "";
  });
  winMsg.style.display = "none";
});

// checking the winners
const winFunc = () => {
  count = 0;
  console.log(count)
  disablBtn();
};

// display when nobody wins
const drawFunc = () => {
  disablBtn();
  winMsgText.innerText = `Nobody won!`;
};

// iterating the win combinations
const winCheck = () => {
  for (const iterator of WINNING_COMBINATIONS) {
    let [a, b, c] = [
      cellArr[iterator[0]].innerText,
      cellArr[iterator[1]].innerText,
      cellArr[iterator[2]].innerText,
    ];
// console.log(cellArr[iterator[0]])
    if (a != "" && b != "" && c != "") {
      if (a == b && b == c) {
        // winning innerText (no diference between a, b, c)
        cellArr[iterator[0]].style.backgroundColor = 'lightblue'
        cellArr[iterator[1]].style.backgroundColor = 'lightblue'
        cellArr[iterator[0]].style.backgroundColor = 'lightblue'
        winFunc(c);
      }
    }
    
  }
};

// displaying 'X' or 'O'
cellArr.forEach((element) => {
  element.addEventListener("click", () => {
    // if true display X
    if (!first) {
      element.innerText = xEl;
      element.style.backgroundColor = "lightgreen";
    } else {
      element.innerText = oEl;
      element.style.backgroundColor = "lightgreen";
    }

    first = !first
    
    count += 1;
    if (count === cellArr.length) {
      drawFunc();
    }
    winCheck();
  });
});
