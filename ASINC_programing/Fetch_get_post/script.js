const PROPERTY = "https://robust-safe-crafter.glitch.me/";

// [{
//     image: string,
//     city: string,
//     price: number,
//     description: string
// }]

let data;
let filterArray = [];

fetch(PROPERTY)
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
    data = result;
    drawButtons(result);
    drawCards(result);
  })
  .catch((error) => console.error(error));

function drawCards(dataArray) {
  document.getElementById("property-wrapper").innerHTML = "";

  dataArray.forEach((data) => {
    let cardWrapper = document.createElement("div");
    //image wrapper
    let imageWrapper = document.createElement("div");
    imageWrapper.classList.add("image-wrapper");
    let image = document.createElement("img");
    image.src = data.image;
    //description wrapper
    let descriptionWrapper = document.createElement("div");
    descriptionWrapper.classList.add("description-wrapper");
    let price = document.createElement("h2");
    price.textContent = data.price;
    let city = document.createElement("p");
    city.textContent = data.city;
    let description = document.createElement("p");
    description.textContent = data.description;

    imageWrapper.append(image);
    descriptionWrapper.append(price, city, description);
    cardWrapper.append(imageWrapper, descriptionWrapper);

    document.getElementById("property-wrapper").append(cardWrapper);
  });
}

function drawButtons(dataArray) {
  let buttonArray = [];

  dataArray.forEach((data) => {
    if (!buttonArray.includes(data.city)) {
      buttonArray.push(data.city);
    }
  });

  buttonArray.forEach((buttonName) => {
    let button = document.createElement("button");

    button.textContent = buttonName;
    button.classList.add("inactive-button");

    document.getElementById("filter-controls").append(button);

    button.addEventListener("click", () => {
      if (button.classList.contains("active-button")) {
        button.classList.remove("active-button");
        button.classList.add("inactive-button");

        filterArray = filterArray.filter((filter) => {
          return filter !== button.textContent;
        });
      } else {
        button.classList.remove("inactive-button");
        button.classList.add("active-button");
        filterArray.push(button.textContent);
      }

      let dataArray = filterData(filterArray);
      drawCards(dataArray);
    });
  });
}


function filterData(filterArray) {
  if (filterArray.length > 0) {
    let dataArray = data.filter((element) => {
      return filterArray.find((city) => {
        return city == element.city;
      });
    });
    return dataArray;
  } else {
    return data;
  }
}

document.getElementById("add-property-button").addEventListener("click", () => {
  window.location.href = "property.html";
});
