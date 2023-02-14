//fetch(baseURL + "/1", {    method: "DELETE",});
// Base URL = https://golden-whispering-show.glitch.me//
//1. Pasirašykite GET, kuris atsisiųs visus produktus ir atvaizduos vieną šalia kito (4 per eilutę):
//https://images.prismic.io/cao-lessons/e4ee1e0a-c959-4fee-8644-e6dfc33c1232_Screen+Shot+2021-06-16+at+12.04.04+PM.png?auto=compress,format
//2. Kitame puslapyje pasirašykite formą, kuri pridės produktą. Pridėjus, išmes alert'ą, kad sėkmingai pridėtas ir nukreips (redirect) į pirminį produktų atvaizdavimo puslapį.
//https://images.prismic.io/cao-lessons/7f7e2a10-ed5b-4cf4-bf5f-141f6c7d309b_Screen+Shot+2021-06-16+at+12.05.42+PM.png?auto=compress,format
//3. Padarykite, kad paspaudus delete mygtuką - back-end'ui būtų išsiunčiamas Fetch Delete Request (baseURL + /:id). T.y. į url turėsite paduoti produkto ID parametrą
//(pvz.: DELETE baseURL/1 ištrins pirmą įrašą).
//4. Padarykite, kad ištrynus produktą - puslapis persikrautų. Taip nėra labai efektyvu -
//pagalvokite, kokiais kitais būdais galima būtų pasiekti šį rezultatą? Hint: gavus success message iš back-end'o filtruoti duomenis ir ištrinti su front-end'u irgi.

const API = "https://golden-whispering-show.glitch.me//";
fetch(API)
  .then((response) => response.json())
  .then((products) => {
    console.log(products);
    createProducts(products);
  })
  .catch((error) => console.error(error));

function createProducts(arr) {
  let boxEl = document.createElement("div");
  boxEl.className = "box-body";
  let button = document.createElement("button");
  button.textContent = "Add new products";
  button.classList.add("add-new-products");

  arr.forEach((data) => {
    let boxCardEl = document.createElement("div");
    boxCardEl.className = "box";
    let imgCardEl = document.createElement("img");
    imgCardEl.src = data.image;

    let prodName = document.createElement("p");
    prodName.textContent = data.title;

    let prodPrice = document.createElement("p");
    prodPrice.textContent = data.price + " Eur";

    let remBtn = document.createElement("button");
    remBtn.textContent = "Delete";

    remBtn.addEventListener("click", () => {
      fetch(API + data.id, { method: "DELETE" })
        .then((response) => {
          alert("Sekmingai istrynete produkta"), 
          response.json();
        })
        .then(() => {
          location.reload();
        })
        .catch((err) => console.log(err));
    });

    boxCardEl.append(imgCardEl, prodName, prodPrice, remBtn);
    boxEl.append(boxCardEl);
    document.querySelector("#products").append(button, boxEl);
  });

  document.querySelector(".add-new-products").addEventListener("click", () => {
    window.location.href = "add.html";
  });
}
