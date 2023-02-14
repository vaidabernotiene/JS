const bodyEl = document.querySelector("body");

const navEl = document.createElement("nav");
navEl.className = "navbar navbar-expand-lg navbar-light bg-light";

const divEl = document.createElement("div");
divEl.setAttribute("class", "container-fluid");

const navarAEl = document.createElement("a");
navarAEl.className = "navbar-brand";
navarAEl.href = "#";
navarAEl.innerText = "Navbar";

const btnEl = document.createElement("btn");
btnEl.className = "navbar-toggler";
btnEl.setAttribute("type", "button");
btnEl.setAttribute("data-bs-toggle", "collapse");
btnEl.setAttribute("data-bs-target", "#navbar");
btnEl.setAttribute("aria-controls", "navbarNav");
btnEl.setAttribute("aria-expanded", "false");
btnEl.setAttribute("aria-label", "Toggle navigation");

const spanEl = document.createElement("span");
spanEl.className = "navbar-toggler-icon";

const navBarDivEl = document.createElement("div");
navBarDivEl.className = "collapse navbar-collapse";
navBarDivEl.style.display = 'flex'
navBarDivEl.id = "navbar";

const ulEl = document.createElement("ul");
ulEl.className = "navbar-nav";

{/* <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse collapse" id="navbar"></div> */}

//-- Creating <li> element with for loop
function linkFunc(el) {
  const liEl = document.createElement("li");
  liEl.className = "nav-item";

  const navLinkEl = document.createElement("a");
  navLinkEl.className = el.className;
  navLinkEl.href = el.href;
  navLinkEl.innerText = el.text;

  if (navLinkEl.innerText == "Home") {
    navLinkEl.setAttribute("aria-current", "page");
    //-- Append elements ---------
    ulEl.append(liEl);
    liEl.append(navLinkEl);
  } else if (navLinkEl.innerText == "Disabled") {
    navLinkEl.setAttribute("tabindex", "-1");
    navLinkEl.setAttribute("aria-disabled", "true");
    //-- Append elements ---------
    ulEl.append(liEl);
    liEl.append(navLinkEl);
  } else {
    //-- Append elements ---------
    ulEl.append(liEl);
    liEl.append(navLinkEl);
  }
}

const arr = [
  {
    className: "nav-link active",
    href: "#",
    text: "Home",
  },
  {
    className: "nav-link",
    href: "#",
    text: "Features",
  },
  {
    className: "nav-link",
    href: "#",
    text: "Pricing",
  },
  {
    className: "nav-link",
    href: "#",
    text: "Disabled",
  },
];

for (const key in arr) {
  const element = arr[key];

  // call function <linkFunc>
  linkFunc(element);
}

//-- Append elements ---------
bodyEl.append(navEl);
navEl.append(divEl);
divEl.append(navarAEl);
divEl.append(btnEl);
btnEl.append(spanEl);
divEl.append(navBarDivEl);
navBarDivEl.append(ulEl);

// navBarDivEl.addEventListener('click', expandMeniuFunc)

// function expandMeniuFunc() {
//   navBarDivEl.setAttribute("aria-expanded", "true");
// }