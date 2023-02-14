const person = {
  vardas: "Vaida",
  miestas: "Klaipeda",
  joinObj: function () {
    return console.log(this.vardas + " " + this.miestas);
  },
};

person.newVar = "Kazkas prideta";
console.log(person.newVar); // Kazkas prideta
console.log(person.vardas); // Vaida
console.log(person.miestas); // Klaipeda
person.joinObj(); // Vaida Klaipeda
