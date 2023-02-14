const bodyEl = document.querySelector("body");

const divEl = document.createElement("div");
const imageEl = document.createElement("img");
const h1El = document.createElement("h1");
const pFirstEl = document.createElement("p");
const pSecondEl = document.createElement("p");

bodyEl.style.backgroundColor = "lightgrey";

divEl.setAttribute(
  "style",
  "background-color: white; margin: 70px; border-radius: 10px; display: flex; flex-direction: column; justify-content: center; align-items: center"
);

imageEl.setAttribute(
  "style",
  "width: 150px; height: 150px; margin: -50px auto 0; object-fit: cover; border-radius: 100%; border: 4px solid white; box-shadow: 5px 5px 5px #888888"
);
imageEl.src = "prt.jpg";

pFirstEl.setAttribute(
    "style", 
    "font-size: 25px; margin: 0px; color: grey"
);
pSecondEl.setAttribute(
    "style", 
    "font-size: 25px; margin: 0px; color: grey; margin-bottom: 20px"
);

bodyEl.append(divEl);
divEl.append(imageEl);
divEl.append(h1El);
divEl.append(pFirstEl);
divEl.append(pSecondEl);

h1El.innerText = "Trent Walton";
pFirstEl.textContent = "Founder & 1/3 of @ paravelinc";
pSecondEl.textContent = "Austin, TX";
