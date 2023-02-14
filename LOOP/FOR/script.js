for (let index = 0; index < 5; index++) {
  const element = [index];
  console.log(element);
}

const animals = ["Kate", "Suo", "Papuga", "Ziurke", "Avis"];
for (let index = 0; index < animals.length; index++) {
  const element = animals[index];
  console.log(`Gyvunai: ${element}`);
}

for (const key in animals) {
  if (Object.hasOwnProperty.call(animals, key)) {
    const element = animals[key];
    console.log(element);
  }
}

// Masyvams for ARRAYS
for (const iterator of animals) {
  console.log(iterator);
}

animals.forEach((element) => {
  console.log(element);
});

/*------------------------------------------------------*/
// Uzduotis
let vartNum = prompt("Ivesk skaiciu: ");
let sum = 0;

for (let index = 1; index <= vartNum; index++) {
  sum += index;
}
console.log(sum);
