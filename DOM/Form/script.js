const form = document.querySelector("form");

// form.addEventListener("click", (e) => {
//   e.preventDefault();

//   const formData = new FormData(form);
//   formData.forEach((value, key) => {
//     console.log(key, value);
//   });

//   fetch('https://httpbin.org/post', {
//     method: 'POST',
//     body: formData,
//   })
//   .then(res => res.json())
//   .then(res => console.log(res))
// });

// GET Object and convert to JSON
form.addEventListener("click", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData)

  fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  })
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(error => console.log(error))
});
