async function sendData() {
  const img = document.getElementById("img-input").value;
  const title = document.getElementById("title-input").value;
  const price = document.getElementById("price-input").value;
  
  const dataToSend = {
    image: img,
    title: title,
    price: parseInt(price),
  };
  console.log(dataToSend);

  const response = await fetch("https://golden-whispering-show.glitch.me//", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataToSend),
    cache: "default",
  });
}

document.getElementById("add-to-cart").addEventListener("click", (e) =>{
  e.preventDefault()
 
  sendData()
  alert('Sekmingai pridejote produkta')
   window.location.href = "./index.html"
});
