// Primitive types:
// String
// Number
// Boolean
// null
// undefined

// Objektai - beveik viskas, kas nėra primitive type.

// Arrays
// const names = ["Lukas", "Ieva"];

// names[2] = "Vaida";

// names.push("Lukas");
// names.push("Rolandas");

// names.pop();
// names.pop();

// const poppedName = names.pop();

// names.unshift("Karolis");

// names.shift();

// console.log(names);

// console.log("Popped name: ", poppedName);

/* 
Exercise 2.

1. Išsirinkite LYGINIUS skaičius ir juos pakelkite kvadratu.
Išspausdinkite naują masyvą
Rezultatas: [484, 2116, 7396, 9604]

2. Naudodami pirminį masyvą, suskaičiuokite visų skaičių
sumą.
Gautą vertę taip pat išspausdinkite
Rezultatas: 468

*/

/* 
Falsey values: 
""
0
null
undefined
*/

/* const allNums = [11, 22, 33, 46, 75, 86, 97, 98];

const evenNumbers = [];
let sum = 0;

for (let i = 0; i < allNums.length; i++) {
  const currentNum = allNums[i];

  // 1 part
  if (currentNum % 2 === 0) {
    evenNumbers.push(currentNum ** 2);
  }

  // 2 part
  sum = sum + currentNum;
}

console.log(evenNumbers, sum); */

// Objects

const place = {
  // <key>: <value>
  // <property name>: <property value>
  name: "Lithuania",
  flagColors: ["yellow", "green", "red"],
  first: {
    second: {
      third: "hello"
    }
  },
  addUp: function (a, b) {
    return a + b;
  }
};

place.first.second.third = 10000;

place.nationalDish = "Cepelinai";

place.first.second.somethingElse = "hello";

place["long name"] = "worked";

console.log(place.addUp(4, 5));
