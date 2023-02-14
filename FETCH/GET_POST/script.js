// GET
fetch("https://reqres.in/api/users", {
method: "POST",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify({
    name: "Vaida",
    job: "Developer",
  }),
})
  .then((res) => {
    if (res.ok) {
      console.log("GET request succesful");
    } else {
      console.log("GET request unsuccesful");
    }
    return res; // return reikalingas, kad kitas .then veiktu toliau
  })
  .then((res) => res.json())
  .then((data) => handleData(data))
  .catch((err) => console.log(err));

function handleData(data) {
  console.log(data);
}
