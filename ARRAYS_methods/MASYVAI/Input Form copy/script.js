const bodyEl = document.getElementById('comments-form')

commFormEl && commFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;

  const username = form.querySelector("#username");
  const comment = form.querySelector("#comment");
  const usernameEl = username && username.value;
  const commentEl = comment && comment.value;

  if (usernameEl) {
    const divEl = document.createElement("div");
    divEl.setAttribute("id", "comment");
    const h1El = document.createElement("h1");
    const pEl = document.createElement("p");

    h1El.innerText = `${usernameEl}'s comments:`;
    pEl.textContent = commentEl;

    commFormEl.append(divEl);
    divEl.append(h1El);
    divEl.append(pEl);

    //--------- Reset BUTTON----------------
    const resetBtn = document.createElement("button");
    resetBtn.textContent = "Reset";
    commFormEl.append(resetBtn);

    resetBtn.addEventListener("click", (e) => {
      e.preventDefault();

      pEl.remove();
      h1El.remove();
      divEl.remove();
      resetBtn.remove();
      username.value = "";
      comment.value = "";
    });
  }
});

// enter id property
for (let index = 0; index < 5; index++) {
  const myDiv = document.createAttribute('div')
  myDiv.textContent = i + 1
  myDiv.id = i+1
  document.body.append(myDiv)
  console.log(myDiv)
}