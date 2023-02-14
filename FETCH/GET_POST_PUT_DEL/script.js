// GET
// fetch("https://reqres.in/api/users")
//   .then((res) => {
//     if (res.ok) {
//       console.log("GET request succesful");
//     } else {
//       console.log("GET request unsuccesful");
//     }
//     return res; // return reikalingas, kad kitas .then veiktu toliau
//   })
//   .then((res) => res.json())
//   .then((data) => handleData(data))
//   .catch((err) => console.log(err));

// function handleData(data) {
//   console.log(data);
// }

// POST ----------------------------------------------------------
// fetch("https://reqres.in/api/users", {
//   method: "POST",
//   headers: {
//     "Content-type": "application/json",
//   },
//   body: JSON.stringify({
//     name: "Vaida",
//     job: "Developer",
//   }),
// })
//   .then((res) => {
//     if (res.ok) {
//       console.log("POST request succesful");
//     } else {
//       console.log("POST request unsuccesful");
//     }
//     return res; // return reikalingas, kad kitas .then veiktu toliau
//   })
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// PUT -------------------------------------------------------------
// fetch("https://reqres.in/api/users/2", {
//   method: "PUT",
//   headers: {
//     "Content-type": "application/json",
//   },
//   body: JSON.stringify({
//     name: "Vaida",
//     job: "Developer",
//   }),
// })
//   .then((res) => {
//     if (res.ok) {
//       console.log("PUT request succesful");
//     } else {
//       console.log("PUT request unsuccesful");
//     }
//     return res; // return reikalingas, kad kitas .then veiktu toliau
//   })
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// DELETE ----------------------------------------------------------
fetch("https://reqres.in/api/users/2", {
  method: "DELETE",
  headers: {
    "Content-type": "application/json",
  }
})
  .then((res) => {
    if (res.ok) {
      console.log("DELETE request succesful");
    } else {
      console.log("DELETE request unsuccesful");
    }
    return res; // return reikalingas, kad kitas .then veiktu toliau
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
