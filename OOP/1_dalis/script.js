// 1 budas sukurti Objekta
//Object literal
let empl = {
  name: "Vaida",
  surname: "Bernotiene",
};

// 2 budas sukurti Objekta
// using new Object()
let empl2 = new Object();

empl2.name = "Vaida";
empl2.surname = "Bernotiene";

// 3 budas sukurti Objekta
// using Function Class
function Empl(name, surname) {
  this.name = name;
  this.surname = surname;

  this.intro = function () {
    console.log(this.name + " " + this.surname);
  };
}

let empl3 = new Empl("Vaida", "Bernotiene");

// Iprastai naudojama-----------------------------
// ES6 class
class Person {
  constructor(personName, personSurname, personAge) {
    this.name = personName;
    this.surname = personSurname;
    this.age = personAge;
  }
  introduce() {
    console.log(this.name + " " + this.surname + " " + this.age);
  }
}

let employee = new Person("Margarita", "Kalina", 36);

// praplesti Person class su Profesors
class Profesors extends Person {
  // # leidzia paslepti elementus nuo isorinio pasiekiamumo
  // norint naudoti # reikia kintamaji pakartoti pries konstruktoriu
  #teaches;
  constructor(name, surname, age, teaches) {
    super(name, surname, age);
    this.#teaches = teaches;
  }
}

let profesor = new Profesors("Vaida", "Ber", 27, "programing");

//Susikurkite konstruktorių car, kuris priims brand, model,
//engine ir turės metodą 'turnOn' - kuris alertins 'vrooom'.
//Sukurkite du objektus ir patikrinkite ar veikia.

class Car {
  constructor(brand, model, engine) {
    this.brand = brand;
    this.model = model;
    this.engine = engine;
  }
  turnOn() {
    alert("vroom");
  }
}

let car1 = new Car("Audi", "Q5", "V6");
let car2 = new Car("VW", "Golf", "V3");

class Car2 {
  constructor(brand, model, engine) {
    this.brand = brand;
    this.model = model;
    this.engine = engine;
    this.turnOn = function () {
      alert("vroom");
    };
  }
}
let car3 = new Car2("Audi", "Q5", "V6");
let car4 = new Car2("VW", "Golf", "V3");

//Pakoreguokite šį konstruktorių ir pridėkite papildomą property 'basePrice'
//ir metodą 'getPrice'. basePrice propertį įrašys sukuriant objektą,
//tačiau getPric priklausimai nuo variklio išmes kokia yra galutinė kaina.
//Jei variklis 'electric' - kaina bus +10,000;
//jei 'diesel' +5,000; jei 'petrol' - kaina tokia kokia ir basePrice.

class Price extends Car {
  constructor(brand, model, engine, basePrice) {
    super(brand, model, engine);
    this.price = basePrice;
  }
  getPrice = () => {
    if (this.engine == "electric") {
      return this.price + 10000;
    } else if (this.engine == "diesel") {
      return this.price + 5000;
    } else if (this.engine == "petrol"){
      return this.price;
    } else {
        return 'Unknown engine'
    }
  };
}

let carPrice1 = new Price("Audi", "Q5", "electric", 10000);
let carPrice2 = new Price("Audi", "Q5", "diesel", 10000);
let carPrice3 = new Price("Audi", "Q5", "perol", 10000);

const bodyEl = document.querySelector("body");
const tblEl = document.createElement('table')
const trEl = document.createElement('tr')
tblEl.style.backgroundColor = 'green'
const tdEl = document.createElement('td')

trEl.innerText = carPrice1.getPrice()

bodyEl.append(tblEl)
tblEl.appendChild(trEl)
trEl.append(tdEl)