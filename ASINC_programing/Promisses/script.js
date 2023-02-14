//sincroninis programavimas
const second = () => {
  console.log("Hello world!"); // ivykdymo eile: 2
};

const first = () => {
  console.log("Hi there!"); // ivykdymo eile: 1
  second();
  console.log("The End"); // ivykdymo eile: 3
};
first();

// asinchroninis programavimas
const networkRequest = () => {
  console.log("Hi there!"); // ivykdymo eile: 1

  setTimeout(() => {
    console.log("Async Code"); // ivykdymo eile: 3
  }, 2000);

  console.log("The End"); // ivykdymo eile: 2
};

networkRequest();

// PROMISE
let myPromise = new Promise((resolve, reject) => {
  resolve("Succesfully");
  // reject negalima rasyti po resolve, nes po "resolve" iseina is io kodo bloko
});
console.log(myPromise);

let myNewPromise = new Promise((resolve, reject) => {
  // if (ok) {
  //     resolve('Success')
  // } else {
  //     reject('Err')
  // }
  setTimeout(() => {
    resolve("Success");
  }, 5000);
});

console.log(myNewPromise);

let mySecPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Viskas gerai");
  }, 1000);
});

mySecPromise
  .then((result) => {
    alert(result);
  })
  //   .then()
  //   .then()
  //   .then()
  //   .then()
  .finally(() => {
    console.log("Finally compleate");
  })
  .catch((error) => {
    alert(error);
  });

console.log(mySecPromise);

async function loadScript(src) {
  let promise = new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;

    script.onload = () =>
      setTimeout(() => {
        resolve("Kodas uzkrautas");
      }, 3000);
    script.onerror = () => reject(new Error(`${src})`));

    document.head.append(script);
  });
  const rezult = await promise
  console.log(rezult)
}

loadScript("./script2.js")

// 1 uzduotis-----------------------------------------------------
//Parašykite pažadą, kuris visada resolve'insis po 5 sekundžių.
//Jam resolve - išoka alert "yes, veikia!".
//Pažado aprašyme teks naudoti setTimeOut.

// 2 uzduotis-----------------------------------------------------
//Pakoreguokite pirmą pratimą, kad būtų 4/5 tikimybė, 20% arba 0.2
//jog resolve'ins po 5 sekundžių, ir 1/5 tikimybė, 80% arba 0.8
//kad po 5 sekundžių bus reject.

// 3 uzduotis-----------------------------------------------------
//Then bendrauja su kitu then.
//Pakoreguokite antrą pratimą, kad jei resolve'inasi pirmas pažadas - pasileidžia then(),
//kuris paprasčiausiai grąžina žinutę "this is a message", 
//šią žinutę pagauna antrasis then()ir ją alertina. 
//Prisiminkime - ką then() returnina, tą pasigauna kitas then() kaip parametrą.

let myThirdPromise = new Promise((resolve, reject) => {
  let randNumb = Math.floor(Math.random() * 10) + 1;
  if (randNumb <= 8) {
    setTimeout(() => {
      resolve("yes, veikia!");
    }, 5000);
  } else {
    setTimeout(() => {
      reject("neveikia!");
    }, 5000);
  }
  console.log(randNumb);
});

myThirdPromise
  .then((result) => {
    return 'Rezultatas';
  })
  .then((result) => {
    alert(result);
    return 'Tai ne Rezultatas'
  })
  .then((result) => {
    alert(result);
  })
  .catch((error) => {
    alert(error);
  });
