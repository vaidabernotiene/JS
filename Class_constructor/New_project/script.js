class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
    this.age = Math.floor(Math.random() * 100);
  }

  addToTable() {
    let row = document.createElement("tr");

    let nameTd = document.createElement("td");
    nameTd.textContent = this.name;
    let surnameTd = document.createElement("td");
    surnameTd.textContent = this.surname;

    row.append(nameTd, surnameTd);
    document.querySelector("#table > tbody").append(row);

    row.addEventListener("click", function () {
      console.log(this.age);
    });
  }
}

function printToConsole(e) {
  e.preventDefault();

  const nameSurname = document.querySelector("#forma > input").value;
  if (nameSurname.trim().length > 0) {
    const nameSurnameSplit = nameSurname
      .trim()
      .split(" ")
      .filter((text) => text)
      .map((text) => {
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
      });

    const name = nameSurnameSplit[0];
    let surname = "";
    for (let index = 1; index < nameSurnameSplit.length; index++) {
      if (index == 1) {
        surname += nameSurnameSplit[index];
      } else {
        surname += " " + nameSurnameSplit[index];
      }
    }
    const person = new Person(name, surname);
    person.addToTable();
    // objectArray.push(person);
  } else {
    alert("Irasykite vardas ir pavarde");
  }
}

document
  .querySelector("#forma > button")
  .addEventListener("click", printToConsole);
