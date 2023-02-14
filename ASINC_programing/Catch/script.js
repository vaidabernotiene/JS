//
// async function getUser() {
//     let response = await fetch("https://api.publicapis.org/entries");
//     console.log
//     try {
//       if (response.ok) {
//         let result = await response.json();
//         console.log(result);
//       }
//     } catch (error) {
//       alert(error);
//     }
//   }

// fetch("https://api.publicapis.org/entries")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

//   fetch("./data.json")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

//[20:12] Vytenis Kareiva
//Issirenkam API:https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/ Ir visa imanoma informacija atvaizduojame naudodami Boostrap Pdaryti mygtuka elemente DELETE ir jis istrins sukurta elemnta
//Big List of Free and Open Public APIs (No Auth Needed) [2023]
//An API (Application Programming Interface) allows you to send and receive data from a remote server, like querying a database. The response will then be delivered back to your own application in a…

const bodyEl = document.querySelector("body");

// creating Form with JS ---------------------------------
function createForm() {
  const myForm = document.createElement("form");
  const cardEl = document.createElement("div");
  cardEl.className = "card";
  const cardBodyEl = document.createElement("div");
  cardBodyEl.className = "card-body";
  myForm.style.backgroundColor = 'lightgreen'

  // append CARD elemens to HTML
  bodyEl.append(cardEl);
  cardEl.append(cardBodyEl);
  cardBodyEl.append(myForm);
}

async function getUser() {
  let response = await fetch(
    "http://universities.hipolabs.com/search?country=Latvia"
  );
  
  try {
    if (response.ok) {
      let result = await response.json();
      const numbrOfValueEl = document.createElement("h2");
      numbrOfValueEl.textContent = 'Number of rezults: ' + result.length;

      createForm();

      for (let index = 0; index < result.length; index++) {
        const element = result[index];
        const titleEl = document.createElement("h2");
        const paragrNameEl = document.createElement("p");
        const webPageEl = document.createElement("a");

        titleEl.textContent = element.country + ", " + element.alpha_two_code;
        paragrNameEl.textContent = element.name;
        webPageEl.setAttribute("href", element.web_pages);
        webPageEl.textContent = element.name;

        const myForm = document.querySelector("form");
        myForm.append(titleEl, paragrNameEl, webPageEl);
      }

      const myForm = document.querySelector("form");
      myForm.prepend(numbrOfValueEl);
    }
  } catch (error) {
    console.log(error);
  }
}

getUser();
