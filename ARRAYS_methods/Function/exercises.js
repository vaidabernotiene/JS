/* -------------------------------
Exercise 1.

Turite masyvą su raidėmis.
Parašykite kodą, kuris suskaičiuos visas "a" raides.
Gautą skaičių išspausdinkite konsolėje.

Rezultatas: 4

Bonus: Sujunkite vertes į vieną 'string'.
Hint: google js join.

*/

const letters = [
  "L",
  "a",
  "b",
  "a",
  " ",
  "d",
  "i",
  "e",
  "n",
  "a",
  ",",
  " ",
  "s",
  "u",
  " ",
  "v",
  "i",
  "š",
  "t",
  "i",
  "e",
  "n",
  "a",
];

let nsumLet = [];

for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  if (element === "a") {
    nsumLet.push(element);
  }
}
console.log(nsumLet.length);

// 2 budas
let joinLet = letters.join("");
let sumEl = 0;
for (let index = 0; index < joinLet.length; index++) {
  const element = joinLet[index];
  if (element === "a") {
    console.log(element);
    sumEl += element;
  }
}
console.log(joinLet);
console.log(sumEl.length - 1);
/* 
Exercise 2.

1. Išsirinkite LYGINIUS skaičius ir juos pakelkite kvadratus.
Išspausdinkite naują masyvą
Rezultatas: [484, 2116, 7396, 9604]

2. Naudodami pirminį masyvą, suskaičiuokite visų skaičių
sumą.
Gautą vertę taip pat išspausdinkite
Rezultatas: 468

*/

const allNums = [11, 22, 33, 46, 75, 86, 97, 98];

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
// Exercise 3.
//
// Objektai netyčia pavirto į spaghetti code! Turime masyvą, kuriame yra
// du atskiri masyvai, anksčiau reprezentavę objektus.
// Jų viduje turime atskirus masyvus su dviem elementais, kurie
// reprezentuoja key - value poras, pavyzdžiui:
//
//    (key)      (value)
// "firstName": "Vasanath"
//
// Parašykite funkciją, kuriai padavus žemiau nurodytą kintamąjį, konsolėje
// būtų atvaizduotas masyvas su jo viduje esančiais dviem objektais.

const spaghettiCode = [
  [
    ["firstName", "Vasanth"],
    ["lastName", "Raja"],
    ["age", 24],
    ["role", "JSWizard"],
  ],
  [
    ["firstName", "Sri"],
    ["lastName", "Devi"],
    ["age", 28],
    ["role", "Coder"],
  ],
];

let newArr = [];

for (let index = 0; index < spaghettiCode.length; index++) {
  const element = spaghettiCode[index];

  let newSpaghetArr = {};

  for (const ky in element) {
    const el = element[ky];
    newSpaghetArr[el[0]] = el[1];
  }
  newArr.push(newSpaghetArr);
}
console.log(newArr);

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
// Exercise 4.
//
// Suraskite bug'ą "B" obuolio "A" viduje!
// Turite masyvą masyvų, kuriuose kiekvienas elementas yra "A" raidė, tačiau
// kartais gali pasitaikyti vienas bug'as ("B raidė").
//
// Jūsų užduotis - parašyti funkciją, kuri grąžins bug'o koordinates tokiu
// formatu - [x, y].
// Bug'as visada bus tik vienas.
//
// Pavyzdžiui:
// [
//   ["B", "A", "A", "A", "A"], <- Bug'as [0, 0] pozicijoje
//   ["A", "A", "A", "A", "A"],
//   ["A", "A", "A", "A", "A"],
//   ["A", "A", "A", "A", "A"],
//   ["A", "A", "A", "A", "A"]
// ]

const appleOne = [
  ["A", "A", "A", "A", "A"],
  ["A", "B", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
]; // [1, 1]

const appleTwo = [
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "B", "A"],
  ["A", "A", "A", "A", "A"],
  ["A", "A", "A", "A", "A"],
];

let arrPushOne = [];
for (let a = 0; a < appleOne.length; a++) {
  
  const element = appleOne[a];
  for (let b = 0; b < element.length; b++) {
    const el = element[b];
    if (el == "B") {
      arrPushOne.push(b);
      arrPushOne.push(a)
    }
  }
}
console.log(arrPushOne);


let arrPushB = [];
for (let a = 0; a < appleTwo.length; a++) {
  const element = appleTwo[a];
  for (let b = 0; b < element.length; b++) {
    const el = element[b];
    if (el === "B") {
      arrPushB.push(b);
      arrPushB.push(a)
    }
  }
}
console.log(arrPushB);

// [3, 2]//

const findBug = (array) => {
  const coord = [];

  for (let y = 0; y < appleOne.length; y++) {
    const line = array[y];
    for (let x = 0; x < line.length; x++) {
      const letter = line[x];
      if (letter === 'B') {
        coord.push(x)
        coord.push(y)
      }
    }
  }
  return coord
}

const one = findBug(appleOne)
const two = findBug(appleTwo)
console.log(one, two)