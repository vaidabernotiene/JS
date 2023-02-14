let bodyEl = document.querySelector("body");
let btnClick = document.querySelector(".click");
let btnClickMeToo = document.querySelector(".clickMeToo");

let divAppendEl = document.createElement("div");
let paragrAppendEl = document.createElement("p");

bodyEl.style.display = "flexbox";

// Pirmo mygtuko paspaudimas
btnClick.addEventListener("click", () => alert("Mane paspaude!"));

// Antro mygtuko paspaudimas ir teksto po juo sukurimas
btnClickMeToo.addEventListener("click", funcAddParagr);
function funcAddParagr() {
  alert("Mane irgi paspaude!");
  btnClickMeToo.style.backgroundColor = randColor()
  
  bodyEl.appendChild(divAppendEl);
  divAppendEl.appendChild(paragrAppendEl);
  paragrAppendEl.textContent = "I am Vaida Bernotiene";
  paragrAppendEl.style.border = "1px solid red";
}

const randColor = () => {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
      .toUpperCase()
  );
};

console.log(randColor());
/*-------------------------------------------------*/
/* 1 uzd. 
3 funkcijos su didejanciais parametrais*/
function func(name) {
  console.log(`1 funkcija: ${name}`);
}
func("Vaida");

/*-----------------------------*/
let nameSurn = (name, surn) => {
  console.log(`2 funkcija: ${name} ${surn}`);
};
nameSurn("Vaida", "Bernotiene");

/*-----------------------------*/
let nameSurnCity = (name, surn, city) => {
  console.log(`3 funkcija: ${name} ${surn}, gyvenu ${city}.`);
};
nameSurnCity("Vaida", "Bernotiene", "Mieste");
/*-------------------------------------------------*/
// 1 variantas
let rezult = (a, b, c) => {
  return console.log("Rezultatas: " + (a * b) / c);
};

rezult(20, 2, 4);

// 2 variantas
function funcRezult(x, y, z) {
  let rezult = (x * y) / z;
  return console.log("Rezultatas: " + rezult);
}
funcRezult(20, 2, 4);

/*-------------------------------------------------*/
/* 2 uzd. */

// Button pozicionavimas kampuose by click
const button = document.querySelector(".button-move");
button.style.cssText = "position:absolute; top:240px; left:0px; padding: 10px";

let corner = 0;
const cornerStyles = [
  "position:absolute; top:240px; right:0; padding: 10px",
  "position:absolute; bottom:0; right:0; padding: 10px",
  "position:absolute; bottom:0; left:0; padding: 10px",
  "position:absolute; top:240; left:0; padding: 10px",
];

button.addEventListener("click", changePosition);

function changePosition(event) {
  if (corner < cornerStyles.length) {
    event.target.style.cssText = cornerStyles[corner];
    corner++;
  }
}
