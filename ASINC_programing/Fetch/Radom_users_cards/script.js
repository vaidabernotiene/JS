// // PARSE
// //----------------------------------------
// let obj = {
//   name: "Vaida",
//   age: 43,
//   hobbies: "skiing",
// };
// console.log(typeof obj);
// console.log(obj); // object

// let stringify = JSON.stringify(obj);
// console.log(typeof stringify); // string
// console.log(stringify);

// let parsed = JSON.parse(stringify);
// console.log(typeof parsed); // object
// console.log(parsed);
// console.log(parsed.name);
// //----------------------------------------

// // FETCH
// //----------------------------------------
// fetch("https://randomuser.me/api/?page=3&results=10&seed=abc")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(typeof data);
//     console.log(data);
//     console.log(data.results[0].id);
//   })
//   .catch((error) => {
//     alert(error);
//   });

// ASYNC
// async function getUser() {
//   let response = await fetch("https://randomuser.me/api/?results=50");

//   try {
//     if (response.ok) {
//       let result = await response.json();
//       console.log(result);
//     }
//   } catch (error) {
//     alert(error);
//   }
// }

// getUser();

// uzduotis
//Jums paskambino pažinčių portalas – jiems reikia greitai sukurti
//front-endą, kuris pasiimtų duomenis iš https://randomuser.me/api/
//ir juos atvaizduotų juos puslapyje. Svarbu atvaizduoti nuotrauką,
//vardą, amžių ir el. pašto adresą.

const bodyEl = document.querySelector("body");

function createForm() {
  const myForm = document.createElement("form");
  const cardEl = document.createElement("div");
  cardEl.className = "card";
  const cardBodyEl = document.createElement("div");
  cardBodyEl.className = "card-body";

  // append CARD elements to BODY
  bodyEl.append(cardEl);
  cardEl.append(cardBodyEl);
  cardBodyEl.append(myForm);

  // append HTML elements to CARD
  myForm.append(dropdownFunc());
  myForm.append(userInfoElFunc());
}

// HTML elements -----------------------------------------------
function userInfoElFunc() {
  const divEl = document.createElement("div");
  const userFotoEl = document.createElement("img");
  userFotoEl.id = "foto";
  userFotoEl.setAttribute("src", "");
  const pNameEl = document.createElement("p");
  pNameEl.id = "name";
  const pAgeEl = document.createElement("p");
  pAgeEl.id = "age";
  const pEmailEl = document.createElement("p");
  pEmailEl.type = "email";
  pEmailEl.id = "email";

  divEl.append(userFotoEl, pNameEl, pAgeEl, pEmailEl);
  return divEl;
}

// DROPDOWN meniu -----------------------------------------------------
function dropdownFunc() {
  const mb3_3El = document.createElement("div");
  mb3_3El.style.display = "flex";
  mb3_3El.style.justifyContent = "right";
  const dropdownMeniuEl = document.createElement("select");
  dropdownMeniuEl.id = "dropdown";

  mb3_3El.append(dropdownMeniuEl);
  return mb3_3El;
}

async function getUser() {
  try {
    let response = await fetch("https://randomuser.me/api/?results=15", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      let arr = await response.json();
      console.log(arr);

      // create FORM ----------------------------------------------------
      createForm();

      // to display first Users CARD ------------------------------------
      const pFotoEl = document.querySelector("#foto");
      const pNameEl = document.querySelector("#name");
      const pAgeEl = document.querySelector("#age");
      const pEmailEl = document.querySelector("#email");

      pFotoEl.src = arr.results[0].picture.large;
      pNameEl.textContent = arr.results[0].name.first;
      pAgeEl.textContent =
        arr.results[0].location.country + ", " + arr.results[0].dob.age;
      pEmailEl.textContent = arr.results[0].email;
      // -----------------------------------------------------------------
      
      const dropdown = document.querySelector("#dropdown");
      for (let index = 0; index < arr.results.length; index++) {
        const optionEl = document.createElement("option");
        optionEl.textContent = index + 1 + ' user';
        optionEl.value = index;

        dropdown.append(optionEl);
        dropdown.addEventListener("change", switchUserFunc);

        function switchUserFunc() {
          let userNumb = this.value;

          // to display all users in the dropdown menu
          pFotoEl.src = arr.results[userNumb].picture.large;
          pNameEl.textContent = arr.results[userNumb].name.first;
          pAgeEl.textContent = `${arr.results[userNumb].location.country}, ${arr.results[userNumb].dob.age}`;
          pEmailEl.textContent = arr.results[userNumb].email;
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
}
getUser();
