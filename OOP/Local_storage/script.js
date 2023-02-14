const localStorageKeyName = "MANO_LISTAS";
const oldList = document.getElementById("old");
const newList = document.getElementById("new");
document.getElementById("btn").addEventListener("click", paspaudzoaiAntMygtuko);
document.getElementById("clear").addEventListener("click", clearLocalStorage);
document.getElementById("colors").addEventListener("change", changeColorsToAll);

function clearLocalStorage() {
  localStorage.clear();
  console.log("isvaliau: ", localStorage);
}

function createElementParagrah(color) {
  let p = document.createElement("p");
  p.style.backgroundColor = color;
  p.style.color = "white";
  p.style.textAlign = "center";
  p.style.border = "7px solid orange";
  p.style.padding = "2px";
  
  return p;
}

function putsToLocalSTorage(localStorageKeyName, data) {
  localStorage.setItem(localStorageKeyName, JSON.stringify(data));
}

function saveToLocalStorage(gaunuVarda) {
  let namesJson = getFromLocalStorage(localStorageKeyName);
  if (namesJson) {
    let names = JSON.parse(namesJson);
    names.push(gaunuVarda);
    putsToLocalSTorage(localStorageKeyName, names);
  } else {
    putsToLocalSTorage(localStorageKeyName, [gaunuVarda]);
  }
  let paragrah = createElementParagrah("red");
  paragrah.textContent = gaunuVarda;
  newList.appendChild(paragrah);
}

function getFromLocalStorage(raktas) {
  return localStorage.getItem(raktas);
}

function paspaudzoaiAntMygtuko() {
  const nameInout = document.getElementById("name");
  saveToLocalStorage(nameInout.value);
  nameInout.value = "";
}

function changeColorsToAll() {
  let color = this.value;
  let allParagrahs = document.querySelectorAll("p");
  for (let i = 0; i < allParagrahs.length; i++) {
    allParagrahs[i].style.backgroundColor = color;
  }
}

let oldListJson = getFromLocalStorage(localStorageKeyName);
if (oldListJson) {
  let parsedList = JSON.parse(oldListJson);
  for (i = 0; i < parsedList.length; i++) {
    let paragrah = createElementParagrah("black");
    paragrah.textContent = parsedList[i];
    oldList.appendChild(paragrah);
  }
}
