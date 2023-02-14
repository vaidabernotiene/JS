const myForm = document.getElementById("my_form");

myForm &&
  myForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(myForm);

    const nameValue = formData.get("first_name");
    const ageValue = formData.get("age");

    const outputEl = document.getElementById("output");
    outputEl.textContent = nameValue + " " + ageValue;
    const currAge = new Date().getFullYear() - ageValue;

    console.log(`Man siuo metu: ${currAge} metai.`);
  });

//------------------------------------------------------------
const myCoffeeForm = document.getElementById("coffee_form");

myCoffeeForm &&
  myCoffeeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(myCoffeeForm);

    const needSugarEl = formData.get("need_sugar");
    console.dir(needSugarEl);
    const needSugar = needSugarEl === "true" ? true : false;

    const dsnNeedSugarText = `${needSugar ? "Does" : "Doesn't"}`;

    const needExtraSugarEl = document.getElementById("extra");
    const needExtraSugar = needExtraSugarEl.checked;

    const dsnNeedExtra = needExtraSugar ? ", also need some extra." : "";
    const message = `${dsnNeedSugarText} need sugar ${
      needSugar ? dsnNeedExtra : ""
    }`;
    console.log(message);
  });

///------------------------------------------------------
//1 uzd.
const my_own_form = document.getElementById("my_own_form");
my_own_form &&
  my_own_form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(my_own_form);
    const nameValue = formData.get("first_name");
    const ageValue = formData.get("age");

    const outputEl = document.getElementById("my_own_form_output");
    const msg =
      ageValue >= 18
        ? `Vairuoti gali: ${nameValue}!`
        : `Dar mokykis vairuoti: ${nameValue}!`;

    if (msg) {
      outputEl.textContent = msg;
    }
  });

///------------------------------------------------------
//2 uzd.
const clsToFrg_form = document.getElementById("clsToFrg_form");
clsToFrg_form &&
  clsToFrg_form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(clsToFrg_form);
    const clsValue = formData.get("cls_to_frg");

    const outputEl = document.getElementById("clsToFrgMsg");
    const clsValueEl = (clsValue * 9) / 5 + 32;
    const msg =
      (outputEl.textContent = `Temperature (Fareinheit): ${clsValueEl} F!`);

    if (msg) {
      outputEl.textContent = msg;
    }
  });

///------------------------------------------------------
//3 uzd.
const workingYears_form = document.getElementById("workingYears_form");
workingYears_form &&
  workingYears_form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(workingYears_form);
    const wrkYearsValue = formData.get("workingYears");

    const outputEl = document.getElementById("workingYearsMsg");

    if (parseInt(wrkYearsValue) >= 20) {
      outputEl.textContent = parseInt(wrkYearsValue) + 100;
    } else if (parseInt(wrkYearsValue) >= 10) {
      outputEl.textContent = parseInt(wrkYearsValue) + 50;
    } else {
      outputEl.textContent = parseInt(wrkYearsValue);
    }
  });

//---------------------------------------------------
const input = document.getElementById("text");
input &&
  input.addEventListener("input", (e) => {
    const output = document.getElementById("output_text");

    if (output) {
      output.textContent = e.target.value;
    }
  });

//---------------------------------------------------
const emailForm = document.getElementById("email_form");

emailForm &&
  emailForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(emailForm);

    const emailEl = formData.get("email");
    const spamEl = formData.get("spam");

    if (!spamEl) {
      alert("Pamirsote pazymeti sutikima del reklamos!");
      return;
    } else {
      alert(`El. pastas ${emailEl} sekmingai uzregistruotas!`);
    }
  });

//----------------------------------------------------
const bmiForm = document.getElementById("bmi_form");

bmiForm &&
  bmiForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.target;

    const weightEl = form.querySelector("[name=weight]");
    const heightEl = form.querySelector("[name=height]");
    const output = form.querySelector("#bmi_output");

    const weight = parseInt(weightEl.value);
    const height = parseInt(heightEl.value);
    const heightInKg = height / 100;
    const result = Math.round((weight / heightInKg ** 2) * 100) / 100;

    const getWeightCategory = (result) => {
      if (result < 18.5) {
        return `underweight.`;
      }
      if (result >= 18.5 && result <= 24.9) {
        return `normal weight.`;
      }
      if (result >= 25 && result <= 29.9) {
        return `overweight.`;
      }
      return `obesity.`;
    };

    const categr = getWeightCategory(result);

    if (output && result) {
      output.innerText = `Your BMI: ${result} (${categr})`;
    }
  });

//--------------------------------------------------------
// 1 ND
const numbr_form = document.getElementById("numbr_form");

numbr_form &&
  numbr_form.addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.target;
    const nameEl = form.querySelector("[name=first_name]");
    const numbrEl = form.querySelector("[name=numbr]");
    const ulEl = form.querySelector("[name=ul_elm]");

    const name = nameEl && nameEl.value;
    const numbr = numbrEl ? parseInt(numbrEl.value) : console.log("Err");

    for (let index = 0; index < numbr; index++) {
      let liAddEl = document.createElement("li");
      liAddEl.innerHTML = name;
      ulEl.appendChild(liAddEl);
    }
  });

//-------------------------------------------------------
// 3 ND
const inputEl = document.getElementById("textEl");

inputEl &&
  inputEl.addEventListener("blur", addItemsInList)
    console.log(inputEl.value);

    const newListEl = inputEl.value;
    let rezult = [];
     function addItemsInList() {   
      rezult.push(newListEl);
      console.log(rezult)
    };
