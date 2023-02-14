const API_PROPERTY = "https://robust-safe-crafter.glitch.me/";

async function sendData() {
  const img = document.getElementById("img-input").value;
  const price = document.getElementById("price-input").value;
  const description = document.getElementById("description-input");
  const city = document.getElementById("city-input");

  const dataToSend = {
    imgage: img,
    city: city,
    price: parseInt(price),
    description: description,
  };
  console.log(dataToSend);

  const response = await fetch(API_PROPERTY, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(dataToSend),
  });
  // const result = await response.json();
}

document.getElementById("property-btn").addEventListener("click", () =>{
  alert('Sekmingai pridejote nauja pasiulyma')
  sendData()
  window.location.href = "./index.html";
});
