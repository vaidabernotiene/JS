const submBtnEl = document.querySelector("#submit-btn");
const inputEl = document.querySelector(".input-name");
const divNowEl = document.querySelector("#div-now");
const pHideEl = document.querySelector("#name-append-now");
const divLaterEl = document.querySelector("#div-later");
const pNowEl = document.createElement("p");
const pLaterEl = document.createElement("p");
const refBtnEl = document.querySelector("#refresh");

const localStorageKeyNames = "Mano_LISTAS";

function saveToLocalStorage(getName) {
  let namesJson = getFromLocalStorage(localStorageKeyNames);

  if (namesJson) {
    let names = JSON.parse(namesJson);
    names.push(getName);
    localStorage.setItem(localStorageKeyNames, JSON.stringify(names));
    console.log(localStorageKeyNames)
  } else {
    localStorage.setItem(localStorageKeyNames, JSON.stringify([]));
  }
}

function getFromLocalStorage(key) {
  return localStorage.getItem(key);
}

/*----------------- SAVE btn ------------------*/
submBtnEl.addEventListener("click", appendToHTMLFunc);
function appendToHTMLFunc(e) {
  e.preventDefault();

  pHideEl.style.display = "none";
  pNowEl.textContent = inputEl.value;
  divNowEl.append(pNowEl);

  saveToLocalStorage(inputEl.value);
}

/*----------------- REFRESH btn ------------------*/
refBtnEl.addEventListener("click", refreshFunc);
function refreshFunc(e) {
  e.preventDefault();

  if (divLaterEl.children.length <= 1) {
    pLaterEl.textContent = pNowEl.textContent;
    divLaterEl.append(pLaterEl);

    clearFunc();
  } else {
    const pEl = document.createElement("p");
    pEl.textContent = pNowEl.textContent;
    divLaterEl.append(pEl);

    clearFunc();
  }
}

// /*----------------- CLEAR func -----------------*/
function clearFunc() {
  localStorage.clear()
  inputEl.value = "";
  pNowEl.textContent = "";
  pHideEl.style.display = "block";
}
