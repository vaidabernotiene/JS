// patikrinti kiek metu su prompt (pilnametis kuris gali pirkti energetini(geltona), pilnametis kuris gali pirkti alkoh0li(zalia), nieko negali pirkti(raudona))
// tada atsakyma dedam į HTML, kad būtų galima matyti ir panaudoti spalvą :)

const btnEl = document.createElement("button");
btnEl.textContent = "Check your age";
btnEl.setAttribute(
  "style",
  "background-color: lightsalmon; height: 50px; width: 150px; margin-bottom: 20px;border-radius: 10px; border: none"
);
document.body.appendChild(btnEl);

const h1El = document.createElement("h1");
h1El.setAttribute(
  "style",
  "height: 50px;border-radius: 10px;align-self: center;display: flex;justify-items: center;align-content: center;flex-direction: column;justify-content: center;align-items: center; margin: 0"
);
h1El.className = 'h1class'

// call Refresh button
btnEl && btnEl.addEventListener("click", checkAgeFunc);

// call prompt
function checkAgeFunc() {
  const input = prompt("Ivesk savo amziu: ");
  if (isNaN(input)) {
    h1El.innerText = "Ne skaicius!";
    h1El.style.backgroundColor = "LightCoral";
  } else if (input >= 18) {
    h1El.innerText = "Skanaus!";
    h1El.style.backgroundColor = "lightgreen";
  } else if (input > 0 && input < 18) {
    h1El.innerHTML = "Tau negalima pirkti energetiniu gerimu!";
    h1El.style.backgroundColor = "LightCoral";
  } else {
    h1El.innerHTML = "Ar tikrai cia tavo amzius?";
    h1El.style.backgroundColor = "LightCoral";
  }
  document.body.appendChild(h1El);
  // elClearFunc();
}

function elClearFunc() {
  const h1ElRem =Array.from(document.getElementsByClassName('h1class'))
  console.log(h1ElRem)
  h1ElRem.splice(0, h1ElRem.length)

  console.log(h1ElRem)
}
