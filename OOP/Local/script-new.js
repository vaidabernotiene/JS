const submbtnEl = document.querySelector("#submit-btn");
const inputEl = document.querySelector(".input-name");
const divNowEl = document.querySelector("#div-now");
const pNowEl = document.querySelector("#name-append-now");
// const pLatEl = document.querySelector("#name-append-later");
const divLaterEl = document.querySelector("#div-later");

const pLaterEl = document.createElement("p");
const refNowEl = document.querySelector("#refresh");


// /*----------------- SAVE btn ------------------*/
// // submbtnEl.addEventListener("click", placeToBoxFunc);
// // function placeToBoxFunc(e) {
// //   e.preventDefault();

// //   pHideEl.style.display = "none"
// //   pNowEl.textContent = inputEl.value;
// //   divNowEl.append(pNowEl);
// // }
// const newNameArr = [];

// document.querySelector("form").addEventListener("submit", appendFunc);
// function appendFunc(e) {
//   e.preventDefault();

//   const inputEl = e.target.elements.name.value;
//   console.log(inputEl);

//   localStorage.setItem("name", inputEl);
//   pNowEl.textContent = inputEl;

//   const getLocalEl = localStorage.getItem("name");
//   newNameArr.push(getLocalEl);
//   localStorage.setItem("name", JSON.stringify(newNameArr));

//   console.log(getLocalEl);
//   console.log(newNameArr);
//   console.log(localStorage);

//   // for (const iterator of localStorage) {
//   //   const pEl = document.createElement("p");
//   //   pEl.textContent = iterator;
//   //   divLaterEl.append(pEl);
//   // }
// }