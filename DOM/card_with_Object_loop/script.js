const bodyEl = document.querySelector("body");
const divEl = document.createElement("div");
divEl.setAttribute(
  "style",
  "background-color: lightsalmon; height: 100px; border-radius: 10px; display: flex; flex-direction: column; justify-content: center; align-items: center"
);
divEl.innerText = "Text";

bodyEl.append(divEl);

{
  /* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */
}

function multplObjFunc(params) {
  const cardEl = document.createElement("div");
  cardEl.className = "card";
  cardEl.style.width = "18rem";

  const imageEl = document.createElement("img");
  imageEl.setAttribute("src", "./prt.jpg");
  imageEl.setAttribute("className", "card-img-top");

  const cardBodyEl = document.createElement("div");
  cardBodyEl.setAttribute('className', "card-body");
  cardBodyEl.setAttribute('style', "display: flex; flex-direction: column; justify-content: center; align-items: center");

  const h5El = document.createElement("h5");
  h5El.className = "card-title";
  h5El.innerText = params.name;

  const pEl = document.createElement("p");
  pEl.className = "card-text";
  pEl.innerText = params.text;

  const aEl = document.createElement("a");
  aEl.className = "btn btn-primary";
  aEl.setAttribute('style', "display: block");
  aEl.href = "#";
  aEl.innerText = params.btn;

  //-- Append elements ---------
  bodyEl.append(cardEl);
  cardEl.append(imageEl);
  cardEl.append(cardBodyEl);

  cardBodyEl.append(h5El);
  cardBodyEl.append(pEl);
  cardBodyEl.append(aEl);

  console.log(cardEl);
}

let cards = [
  {
    name: "Title text",
    text: "Some text",
    btn: "Button",
  },
  {
    name: "Title text",
    text: "Some text",
    btn: "Button",
  },
];

//--- LOOP'ing frew cards
for (const key in cards) {
  const multCard = cards[key];

  //--- execute function multplObjFunc with cards parametres
  multplObjFunc(multCard);
}
