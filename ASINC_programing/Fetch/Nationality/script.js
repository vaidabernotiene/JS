////Sukurti UI pavaizduotą paveikslėlyje.
//Vardą įrašius į input laukelį ir paspaudus submit,
//turi atsirasti Vardas kurį įrašėmė, ir tikimybės su
//progress bar'ais. Šios tikimybės nurodo kokia tikimybė,
//kad žmogus turintis tokį vardas bus iš tos šalies.
//Nationality vietoje galima nurodyti tik šalies kodą.
//Duomenis pasiimti iš čia: https://api.nationalize.io/?name=vardas.
//"vardas" pakeistį tą vardą kuris bus įrašytas input laukelyje.
const link = "https://api.nationalize.io/?name=";

async function userNat() {
  try {
    let response = await fetch(link + "vardas", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      await response.json();

      // Card template ----------------------------------
      const bodyEl = document.querySelector("body");
      const divCardBodyEl = document.createElement("div");
      divCardBodyEl.className = "card-body";
      const divCardEl = document.createElement("div");
      divCardEl.className = "card";
      divCardEl.style.width = "30rem";
      const userInputEl = document.createElement("input");
      userInputEl.className = "form-text";
      const btnEl = document.createElement("button");
      btnEl.textContent = "Submit";

      bodyEl.append(divCardEl);
      divCardEl.append(divCardBodyEl);
      divCardBodyEl.append(userInputEl, btnEl);
      // END ------- Card template -----------------------

      btnEl.addEventListener("click", inputFunc);
      function inputFunc(e) {
        e.preventDefault();

        fetch(link + userInputEl.value)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            const h1El = document.createElement("h1");
            h1El.style.fontSize = "calc(3rem + 1.5vw)";
            const h2El = document.createElement("h2");
            h1El.textContent = data.name.toUpperCase();
            h2El.textContent =
              Object.keys(data.country[0])[1].charAt(0).toUpperCase() +
              Object.keys(data.country[0])[1].substring(1) +
              ":";
            divCardBodyEl.append(h1El, h2El);

            // Create data response templeate -----------------------------
            data.country.forEach((element) => {
              const pEl = document.createElement("p");
              const prgBarBodyEl = document.createElement("div");
              prgBarBodyEl.style.justifyContent = "space-between";
              const probEl = document.createElement("div");
              const prgBarEl = document.createElement("div");
              prgBarEl.className =
                "progress-bar progress-bar-striped progress-bar-animated";
              prgBarEl.setAttribute("role", "progressbar");
              prgBarEl.setAttribute("aria-valuemin", "0");
              prgBarEl.setAttribute("aria-valuemax", "1");

              // Fill card with data from response ---------------------------
              pEl.textContent = "Nationality: " + element.country_id;
              prgBarEl.style.width = element.probability * 100 + "%";
              probEl.textContent = (element.probability * 100).toFixed(2) + "%";
              prgBarBodyEl.className = "progress";

              // Append elements ---------------------------------------------
              divCardBodyEl.append(pEl, prgBarBodyEl, probEl);
              prgBarBodyEl.append(prgBarEl);
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  } catch (error) {
    console.log(error);
  }
}

userNat();
