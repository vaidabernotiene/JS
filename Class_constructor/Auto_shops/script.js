//Sukurkite HTML formą, kurioje vartotojas galės įrašyti (į input laukelius):
// car brand, model, mileage, price ir image (url laukelis).
//Per konstruktorių, sukuriams objektas ir jis atvaizduojamas
//po forma (CSS rašykite CSS'e)
//Paspaudus ant automobilio nuotraukos- turi alert išmesti kainą.

class CarClass {
  constructor(brand, model, mileage, price, image) {
    this.brand = brand;
    this.model = model;
    this.mileage = mileage;
    this.price = price;
    this.image = image;
  }
  carCardTempleate() {
    const containerEl = document.querySelector(".container");
    const divCardEl = document.createElement("div");
    const divCardBodyEl = document.createElement("div");
    const h5CardEl = document.createElement("h5");
    const h6CardEl1 = document.createElement("h6");
    const h6CardEl2 = document.createElement("h6");
    const h6CardEl3 = document.createElement("h6");
    const imgCardEl = document.createElement("img");

    divCardEl.className = "card";
    divCardEl.style.width = "18rem";
    divCardBodyEl.className = "card-body";
    h5CardEl.className = "card-title";
    h6CardEl1.className = "card-subtitle mb-2 text-muted";
    h6CardEl2.className = "card-subtitle mb-2 text-muted";
    h6CardEl3.className = "card-subtitle mb-2 text-muted";
    imgCardEl.className = "card-link";

    // declare which elements need to upload
    this.uploadInputToCard(h5CardEl, h6CardEl1, h6CardEl2, h6CardEl3, imgCardEl);

    containerEl.append(divCardEl);
    divCardEl.append(divCardBodyEl);
    divCardBodyEl.append(imgCardEl);
    divCardBodyEl.append(h5CardEl);
    divCardBodyEl.append(h6CardEl1);
    divCardBodyEl.append(h6CardEl2);
    divCardBodyEl.append(h6CardEl3);
  }

  uploadInputToCard(h5CardEl, h6CardEl1, h6CardEl2, h6CardEl3, imgCardEl) {
    const { brand, model, mileage, price, image } = this;
    h5CardEl.innerText = brand;
    h6CardEl1.innerText = `Model: ${model}`;
    h6CardEl2.innerText = `Mileage: ${mileage} km`;
    h6CardEl3.innerText = `Price: ${price} Eur`;
    imgCardEl.innerText = "Picture";
    imgCardEl.setAttribute("src", image);
    imgCardEl.style.height = "50px";
    imgCardEl.style.width = "50px";
  }
}

document
  .querySelector("#auto-form > button")
  .addEventListener("click", uploadCar);

function uploadCar(e) {
  e.preventDefault();

  const carName = document.querySelector("#car-name").value;
  const carModel = document.querySelector("#car-model").value;
  const carMileage = document.querySelector("#car-mileage").value;
  const carPrice = document.querySelector("#car-price").value;
  const carImage = document.querySelector("#car-image").value;

  const car = new CarClass(carName, carModel, carMileage, carPrice, carImage);
  // create Card with input parametres
  car.carCardTempleate();

  console.log(car);
  // Link on foto
  clickFotoFunc(carName, carModel, carMileage, carPrice, carImage); // paduodam funkcijai parametru, kuriu reikia clickFotoFunc
}

clickFotoFunc = (carName, carModel, carMileage, carPrice, carImage) => {
  let cardLinkEl = document.querySelector(".card-link");

  cardLinkEl.addEventListener("click", () => {
    alert(`${carName} ${carModel} kaina: ${carPrice} Eur.`);
  });
};
