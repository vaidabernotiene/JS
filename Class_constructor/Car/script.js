//-------------------------------------------------
class ClassUser {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  print() {
    console.log(`${this.name} has an age of
              ${this.age} and gender of ${this.gender}`);
  }
  combinedNameAgeGender(extra) {
    if (extra == undefined) {
      extra = 999999999999;
    }
    console.log(this.name + " " + this.age + " " + this.gender + " " + extra);
  }
}
const ClassRoy = new ClassUser("Roy", "19", "Male");
const ClassPetras = new ClassUser("Petras", "20", "Male");
const ClassRokas = new ClassUser("Rokas", "21", "Male");
const ClassNabtas = new ClassUser("Mantas", "22", "Male");
// console.log(ClassRoy)
// ClassRoy.combinedNameAgeGender();
ClassRoy.combinedNameAgeGender();
ClassPetras.combinedNameAgeGender("123213213");
ClassRokas.combinedNameAgeGender();
ClassNabtas.combinedNameAgeGender("789879879789");
function User(name, age, gender) {
  this.age = age;
  this.name = name;
  this.gender = gender;
  this.print = function () {
    console.log(
      `${this.name} has an age of ${this.age}
                  and gender of ${this.gender}`
    );
  };
  this.combinedNameAgeGender = function (
    extra = "kazkokia default value duodu"
  ) {
    console.log(extra);
  };
}
const Roy = new User("Roy", "19", "Male");
Roy.combinedNameAgeGender();
Roy.print();
console.log(Roy);

// susikurti klase/kontruktoriu
// klase/kontrukrius primiims pvz 3 aegumentus: Audi, 2012, juoda
// klaseje/kontrukriuje bus funkcija/metodas uzvesti masina ir jis priims argutmenta kas uzveda
// uzvedam ta masina ir grazinam i console uzvesta: Audi, 2012, juoda + kas uzvede
// creating CAR Class /////////////////////////////////////////
// NAUJAUSIAS variantas-------------------------------------------------------
class CarClass {
  constructor(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;
  }

  getAccelerate(driver) {
    console.log(
      `${this.model} ${this.year} ${this.color}, driven by: ${driver}.`
    );
  }
}

const car = new CarClass("Audi", 2012, "black");
console.log(car);
car.getAccelerate("Vaida");

// SENESNIS variantas----------------------------------------------------------
function Car(model, year, color) {
  this.model = model;
  this.year = year;
  this.color = color;
  this.driver = function (driver) {
    console.log(
      `${model} ${year} ${color}, driven by: ${driver}.`
    );
  };
}

const newCar = new Car("Audi", 2012, "black");
newCar.driver("Vaida");
console.log(newCar)
