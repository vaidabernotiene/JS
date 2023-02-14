// Naudojam API gauti duomenis: http://api.tvmaze.com/search/shows?q=dog
//     Uzduotis:
//         Kiekviename objekte yra show,o show turi --- weight ---
// Patikrinti ar weight yra daugiau uz 75 ir atvaizduoti objektus su visa informacija, informacija turi buti atvaizduota kortelese, kaip nors graziai :)
// Visas html turetu buti sukurtas su JS, stengiames korteles kurima skirstyti i atskiras funkcijas :)
// Papildomai:
//     Padaryti input irasyti weight ir tada paspaudus mygtuka rusiuoti, grazinti informacija pagal irasyti weight
// Taip pat galim daryti dar select kuriame butu < daugiau, > maziau, lyg = ir t.t. ir panaudoti kartu su weight :)

const apiUrl = "http://api.tvmaze.com/search/shows?q=dog";
// const weight = 75
const exampleEl = document.getElementById("example");
function getDataFromApi() {
  fetch(apiUrl)
    .then((x) => x.json())
    .then((data) => filterData(data));
}

function filterData(data) {
  let weight = document.getElementById("weight").value;
  let comparisonOperator = document.getElementById("comparisonOperators").value;
  console.log("irasytas svoris: " + weight);
  console.log("comparisonOperator: " + comparisonOperator);
  data.forEach(function (item) {
    if (eval(item.show.weight + comparisonOperator + weight)) {
      // if (item.show.weight > weight) {
      console.log(item);
      let card = document.createElement("div");
      card.style.padding = "10px";
      card.style.backgroundColor = "red";
      card.style.color = "white";
      let title = document.createElement("div");
      title.innerHTML = item.show.summary;
      let weightEl = document.createElement("div");
      weightEl.style.textAlign = "center";
      weightEl.innerText = item.show.weight;
      let comparisonString = document.createElement("div");
      comparisonString.style.textAlign = "center";
      comparisonString.innerText =
        item.show.weight + comparisonOperator + weight;
      card.appendChild(title);
      card.appendChild(weightEl);
      card.appendChild(comparisonString);
      exampleEl.appendChild(card);
    }
  });

  let seperator = document.createElement("div");
  seperator.style.padding = "10px";
  seperator.style.backgroundColor = "yellow";
  exampleEl.appendChild(seperator);
}

let weightBtn = document.getElementById("weightBtn");
weightBtn.addEventListener("click", getDataFromApi);
getDataFromApi();
