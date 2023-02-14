const names = ["Lukas", "Ieva"];
names[2] = "Vaida";
// PUSH -------------
names.push("Tomas", 100, "Giedra");
console.log(names);
// POP ---------------
let remName = names.pop();
console.log(remName);
// UNSHIFT -----------
names.unshift("Karolis");
console.log(names);
// SHIFT -------------
names.shift("Karolis");
console.log(names);
// LENGTH ------------
names[names.length] = "Ona";
console.log(names);
console.log(names.length);
//------------------------------------
const a = ["Hello", "Vaida"];
if (a.length > 0) {
  console.log(a[a.length - 1]);
}
console.log(a); // 'Vaida' isveda paskutini
//------------------------------------
// 1 uzduotis // 2 uzduotis
const allNums = [11, 22, 33, 46, 75, 86, 97, 98];

const evenNum = [];
let elSum = 0; // 0, nes prie undefine negalima atlikti aritmetiniu operaciju
// 1 udz logika
for (let index = 0; index < allNums.length; index++) {
  const element = allNums[index];
  // 1 var.
  //   if (!element % 2) {
  //     evenNum.push(element ** 2);
  //   }
  // 2 var.
  if (element % 2 === 0) {
    evenNum.push(element ** 2);
  }
  // 2 uzd logika
  elSum += element;
}

console.log(evenNum);
console.log(elSum);

//----------------------------------
let masyvas = [1, 3, 4];
let sum = 0;
for (let index = 0; index < masyvas.length; index++) {
  const element = masyvas[index];
  sum += element;
}
console.log(`Suma: ${sum}`);

// forEACH -------------------------
// nieko negrazina
let arr = [10, 3, 4, 6, 10];
let sumArr = 0;
arr.forEach((el, index, arr) => {
  sumArr += el;
  console.log(el); // elements
  console.log(index); // index
  console.log(arr); // ARRAY
});
console.log(sumArr);
// console.log(arrForEach) // undefined -- todel <Let arrForEach = > siame metode nereikia

// uzduotis
const bodyEl = document.querySelector("body");
const ulEl = document.createElement("ul");

const cars = ["BMW", "VW", "Porsche", "Audi"];
cars.forEach((el) => {
  const liEl = document.createElement("li");
  liEl.textContent = el;
  ulEl.append(liEl);
});

bodyEl.append(ulEl);


let clickCount = 0
ulEl.addEventListener("click", function () {
  clickCount ++
  console.log(clickCount)
  if (clickCount % 2 == 0) {
    sortArray(cars);
  } else {
    sortArrayReverse(cars)
  }
  drawList(cars);
});

function drawList(arr) {
  const ulEl = document.createElement("ul");
  ulEl.textContent = "";

  arr.forEach((el) => {
    const liEl = document.createElement("li");
    liEl.textContent = el;
    ulEl.append(liEl);
  });

  bodyEl.append(ulEl);
}

function sortArray(arr) {
  arr.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    } else if (a.toLowerCase() > b.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });
}

function sortArrayReverse(arr) {
  arr.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    } else if (a.toLowerCase() > b.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  }).reverse()
}
console.log(cars);
// MAP ----------------------------
// grazina callBack funkcija ir susikuria naujas ARRay
let masyvasMap = masyvas.map((el) => {
  return el + 1;
});
console.log(masyvasMap);

let carsMap = cars.map((el) => el.toUpperCase());
console.log(carsMap);

// uzduotis
const frName = ["ievA", "aurIs", "tEdAs", "tIMas", "monikA", "neDa"];
// nekeiciant masyvo susortiruoja
frName.sort((a, b) => {
  if (a.toLowerCase() < b.toLowerCase()) {
    return -1;
  } else if (a.toLowerCase() > b.toLowerCase()) {
    return 1;
  } else {
    return 0;
  }
});
// .reverse() // apvercia vardus nuo galo i pradzia
console.log(frName);

let frNameMap = frName.map((el) => {
  /* suranda kiekv. sar. elem. pirma raide ir ja padidina + 
nukerpa kiekv. sar. elem. pirma raide ir toliau visas sumazina*/
  return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
});
console.log(frNameMap);

let nameLenght = frNameMap.filter((el) => el.length > 5); // vardai sarase ilgesni, nei 5 raides
console.log(nameLenght);
console.log(frNameMap.indexOf("Neda")); // 5 grazina pirmo rasto elem. indeksa
// FILTER ------------------------------------------------------
const frArrays = [
  { vardas: "Petras", amzius: 48 },
  { vardas: "Vilma", amzius: 17 },
  { vardas: "Kristina", amzius: 40 },
];
const frOver18 = frArrays.filter((amz) => amz.amzius > 18);
console.log(...frOver18);
const frOver18Filt = frOver18.map((pd) => `${pd.vardas} ${pd.amzius} m.`);
console.log(frOver18Filt);

const numbers = [45, 2, -6, 40, 5, 45, 2, -6, 10, 50, 100, 10, 1, 50, 51];
const filtNumb = numbers.filter((el) => el >= 10 && el <= 50);
console.log(filtNumb);
console.log(numbers.indexOf(2)); // 1 grazina pirmo rasto elem. indeksa

// FIND first letter 'K' in Array
const cities = ["Klaipeda", "Vilnius", "Kretinga"];
let kcities = cities.find((e) => e.charAt(0) === "K"); // ['Klaipeda'] suranda tik pirmaji atitinkanti elem.
// let kcities =  cities.find((e) => e.charAt(0) === 'K') // ['Klaipeda, 'Kretinga'] suranda visus atitink.
console.log(kcities);

// INCLUDES --------------------------------------------------
let kcity = cities.includes("Klaipeda"); // true suranda atitinkanti elem lyginimo principu.
console.log(kcity);

// SOME ar nors vienas miestas prasideda is mazosios raides?
console.log(cities.some((e) => e.charAt(0) === e.charAt(0).toLowerCase()));

// EVERY ar visi miestai prasideda is didziosios raides?
console.log(
  cities.every((e) => e.charAt(0) === e.charAt(0).toLocaleUpperCase())
);

// uzduotis
const numbArr = [1, 2, 1, 1, 1, 6, 6, 8];
const newArr = new Set(numbArr); // isrenka unikalias reiksmes
console.log(newArr);
console.log(Array.from(newArr));

// uzduotis
const arr1 = ["abb", "abc", "bbc", "abb"]; // isrinkti besikartojancias reiksmes is visu elementu
const arr2 = ["88", "999", "989", "9898", "989", "88", "989"]; // patikrinti ar yra vienodu elementu
// const arr3 = (['ABSDE', 'DDEB', 'BED', 'CCA', 'BAC'])

// pvz. ARR1
function filtUniqFunc(param1) {
  // const arr1Join = params1.join("");
  // const newArr = new Set(arr1Join);
  // const arr2 = [Array.from(newArr).join("")];
  const mapArr0 = param1.filter((elem) => console.log(elem));
  const mapArr1 = param1.filter((el) => {
    // filter // strings // abb <> abc <> bbc <> abb
    const arr1Arr = Array.from(el);
    // console.log(arr1Arr); // (3) ['a', 'b', 'c']
    const arr1Set = new Set(arr1Arr);
    // console.log(arr1Set); // Set(3) {'a', 'b', 'c'}
    if (arr1Arr.length == arr1Set.size) {
      return el;
    }
  });
  console.log(mapArr1);
}
filtUniqFunc(arr1);

// pvz. ARR2
function filtrUniqElFunc(params2) {
  // some suranda pirmus unikalius elementus
  const unique = params2.every((el, index) => {
    return params2.indexOf(el) !== index;
  });
  console.log(unique);
}
filtrUniqElFunc(arr2);

// REDUCE
const numArr = [45, 2, -6, 40, 5, 45, 2, -6, 10, 50, 100, 10, 1, 50, 51];

let sums = 0;
for (let index = 0; index < numArr.length; index++) {
  sums += numArr[index];
}
console.log(sums);

const total = numArr.reduce((sum, num) => {
  return (sum += num);
  // sum   num
  // [0] vertina 0 + 45 => return 45
  // [1] vertina 45 + 2 => return 47
  // [2] vertina 47 + -6 => return 41
  // [3] vertina 41 + 40 => return 81
  // [4] vertina 81 + 5 => return 86
  // ...
}, 0); // 0 tolygu const sum = 0
console.log(total);

const arr4 = ["abb", "abc", "bbc", "abb"];
const total1 = arr4.reduce((sum, num) => {
  return (sum += num);
}, "Name: "); // 0 tolygu const sum = 0
console.log(total1); // Name: abbabcbbcabb

// max number in ARRay
const maxNum = numArr.reduce((total, el) => Math.max(total, el));
// [0] tikrina infinity ir 45 => return 45
// [1] tikrina 45 ir 2 => return 45
// [2] tikrina 45 ir -6 => return 45
// [3] tikrina 45 ir 40 => return 45
// [4] tikrina 45 ir 5 => return 45
// ...
console.log(maxNum);

console.log(Math.max(...numArr));

// SORT pagal ASCI table
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort());
console.log(fruits.reverse());

const car = ["Audi", "BMW", "VW", "Porsche"];
// 1 metodas
const sortCar = car.map((el) => {
  // return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
  return el.toUpperCase();
});
console.log(sortCar.sort());

// 2 metodas
const sortCars = car.sort((total, el) => {
  if (total.toLowerCase() < el.toLowerCase()) {
    return -1;
  } else if (total.toLowerCase() > el.toLowerCase()) {
    return 1;
  } else {
    return 0;
  }
});
console.log(sortCars);

// pvz. sort ascending (nuo 0 iki didz.)
const points = [100, 0, 1, 5, 25, 10];
const sortPionts = points.sort((a, b) => a - b);
// [0] tikrina 100 - 0 = >0 => return // [0, 100, 1, 5, 25, 10]
// [1] tikrina 100 - 1 = >0 => return // [0, 1, 100, 5, 25, 10]
// [2] tikrina 100 - 5 = >0 => return // [0, 1, 5, 100, 25, 10]
// [3] tikrina 100 - 25 = >0 => return // [0, 1, 5, 25, 100, 10]
// [4] tikrina 100 - 10 = >0 => return // [0, 1, 5, 25, 10, 100]
// ir vel eina per visa sarasa
// ...
console.log(sortPionts);

//pvz. isrinkti tik pilnamecius
const people = [
  {
    name: "Petras",
    age: "18",
  },
  {
    name: "Jonas",
    age: 15,
  },
  {
    name: "Antanas",
    age: 20,
  },
  {
    name: "Urtė",
    age: 10,
  },
  {
    name: "Diana",
    age: 25,
  },
  {
    name: "Ieva",
    age: 16,
  },
];

// const onlyNames = people.map((el) => {
//   // Number(el.age) >= 18 ? console.log(`Adult: ${el.name}`) : "";
//   el.age >= 18 ? console.log(el.name) : "";
//   // if (el.age >= 18){return console.log(el.name)}

// });

console.log(
  people
    .filter((el) => el.age >= 18)
    .map((el) => el.name)
    .sort((a, b) => {
      if (a.toLowerCase() < b.toLowerCase()) {
        return -1;
      } else if (a.toLowerCase() > b.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    })
);

// uzd.
//Sukurkite funkciją. Ji priims vieną argumentą -
//array su objektais, kurie turės du parametrus - name ir price.
// Grąžins - brangiausią ir pigiausią prekes.
// Turi veikti padavus neribotą kiekį elementų (pavyzdyje apačioje - tik du).

const fruit = [
  {
    name: "Apple",
    paid: 3.5,
  },
  {
    name: "Mango",
    paid: 5.5,
  },
  {
    name: "Kiwi",
    paid: 1.5,
  },
  {
    name: "Grapes",
    paid: 0.5,
  },
];

function minMaxFunc(params) {
  const sortPrice = params.sort((a, b) => {
    return a.paid - b.paid;
  });
  console.log(
    `MIN price: ${sortPrice[0].name} - ${sortPrice[0].paid} Eur; ${
      sortPrice[sortPrice.length - 1].name
    } - ${sortPrice[sortPrice.length - 1].paid} Eur`
  );
  return console.log(sortPrice[0], sortPrice[sortPrice.length - 1]);
}

minMaxFunc(fruit);
