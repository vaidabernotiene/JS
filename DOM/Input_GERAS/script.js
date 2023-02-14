// let box = document.querySelectorAll(".box");

// // for first 3 elements
// for (let i = 0; i < 3; i++) {
//   box[i].textContent = "Pakeiciau teksta!";
//   console.log(box[i]);
// }

// // for last 3 elements
// for (let i = 3; i < box.length; i++) {
//   box[i].innerHTML = "<h2>Iterpiau h2</h2>";
//   console.log(box[i]);
// }

// console.log(box);

// let newElem = document.querySelector("div:nth-child(1)");
// newElem.style.background = "lightblue";
// // newElem.className = "lightblue";
// console.log(newElem);

// let newElemAbout = document.querySelectorAll('.box').item([2]);
// newElemAbout.textContent = 'Naujas pavadinimas';
// console.log(newElemAbout);
//--------------------------------------------------------------------------------
// UZDUOTIS su form

// pasileidziam funkcija kuri sukuria forma ir ideda i html
// joje turit panaudoti tris funkcijas kuri sukuria email input,
//suskuria password input, sukuria checkbox
// funkcija sukuria email input, mes i ja norim paduoti:
//Email address ,We'll never share your email with anyone else.
//funkcija kuri suskuria password inputpaduoti: Password
//funnkcija sukuria checkbox paduoti: Check me out

const bodyEl = document.querySelector("body");

// creating Form with JS ---------------------------------
function createForm() {
  const myForm = document.createElement("form");
  const cardEl = document.createElement("div");
  cardEl.className = "card";
  const cardBodyEl = document.createElement("div");
  cardBodyEl.className = "card-body";

  // append CARD elemens to HTML
  bodyEl.append(cardEl);
  cardEl.append(cardBodyEl);
  cardBodyEl.append(myForm);

  // append EMAIL, PASSWORD, CHECKBOX and BUTTON
  myForm.append(
    emailInpFunc(
      "Email address: ",
      "Email address ,We'll never share your email with anyone else."
    ),
    passwInpFunc(),
    checkboxFunc('Check me out'),
    buttonFunc()
  );
}

createForm();
// END creating Form with JS ---------------------------------

// Email input -----------------------------------------------
function emailInpFunc(lbl, warnMsg) {
  const mb3_1El = document.createElement("div");
  mb3_1El.className = "mb-3";

  const labelEl = document.createElement("label");
  labelEl.className = "form-label";
  labelEl.setAttribute("htmlFor", "exampleInputEmail1");
  labelEl.textContent = lbl;

  const emailEl = document.createElement("input");
  emailEl.type = "email";
  emailEl.required = true;
  emailEl.id = "exampleInputEmail1";

  const warnEl = document.createElement("div");
  warnEl.className = "emailHelp";
  warnEl.style.visibility = "hidden";
  warnEl.innerText = warnMsg;

  mb3_1El.append(labelEl, emailEl, warnEl);
  return mb3_1El;
}

// Password input --------------------------------------------
function passwInpFunc() {
  const mb3_2El = document.createElement("div");

  const labelEl = document.createElement("label");
  labelEl.className = "form-label";
  labelEl.setAttribute("htmlFor", "exampleInputPassword1");
  labelEl.textContent = "Password: ";

  const passwordEl = document.createElement("input");
  passwordEl.type = "password";
  passwordEl.required = true;
  passwordEl.id = "exampleInputPassword1";

  mb3_2El.append(labelEl, passwordEl);
  return mb3_2El;
}

// Checkbox input --------------------------------------------
function checkboxFunc(arg) {
  const mb3_3El = document.createElement("div");

  const checkboxEl = document.createElement("input");
  checkboxEl.type = "checkbox";
  checkboxEl.id = "exampleCheck1";

  const labelEl = document.createElement("label");
  labelEl.className = "form-check-label";
  labelEl.setAttribute("htmlFor", "exampleCheck1");
  labelEl.textContent = arg;

  mb3_3El.append(checkboxEl, labelEl);
  return mb3_3El;
}

// Add Button -----------------------------------------------
function buttonFunc() {
  const buttonEl = document.createElement("button");
  buttonEl.type = "submit";
  buttonEl.className = "btn" + " " + "btn-primary";
  buttonEl.textContent = "Submit";

  return buttonEl;
}

// display warrning message ----------------------------------
const selectWarnEl = document.querySelector(".emailHelp");
const emailInpValue = document.querySelector("#exampleInputEmail1");

emailInpValue &&
  emailInpValue.addEventListener("change", () => {
    selectWarnEl.style.visibility = "visible";
  });

// submit form ------------------------------------------------
const myForm = document.querySelector("form");

myForm &&
  myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailInpValue = document.querySelector("#exampleInputEmail1").value;
    const selectWarnEl = document.querySelector(".emailHelp");
    const paswInpValue = document.querySelector("#exampleInputPassword1").value;
    const checkboxValue = document.querySelector("#exampleCheck1");

    console.log(emailInpValue, paswInpValue, checkboxValue.checked);

    if (checkboxValue.checked) {
      alert("Jus sekmingai uzsiregistravote");
      myForm.reset();
      selectWarnEl.style.visibility = "hidden";
    } else {
      alert("Jus sekmingai uzsiregistravote! Bet nepatikrinome...");
      myForm.reset();
      selectWarnEl.style.visibility = "hidden";
    }
  });
