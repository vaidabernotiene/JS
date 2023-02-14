// const places = {
//   name: "Lietuva",
//   flagColor: ["yellow", "green", "red"],
//   id: "LT",
//   regions: {
//     cities: {
//       first: "Palanga",
//       second: "Nida",
//     },
//   },
// };

// console.log(places.name, places.regions.cities.first);

let krepselis = [
  {
    rusis: "Obuolys",
    kaina: "2.99",
  },
  {
    rusis: "Apelsinas",
    kaina: "1.79",
  },
  {
    rusis: "Agurkas",
    kaina: "0.99",
  },
];
// Padaryti funkcija kuriai paduosit krepelis
// Ji ta krepselis funkcijoje ides i for loop'a
// Ir grazins sarasa po viena i konsole:
// Obuolys kainuoja 2.99
// Apelsinas kainuoja 1.99
// Agurkas kainuoja 0.99

const basket = () => {
  for (let a = 0; a < krepselis.length; a++) {
    const arrBasket = krepselis[a];
    if (arrBasket["rusis"] == "Apelsinas") {
      arrBasket["kaina"] = Number(arrBasket["kaina"]) + 0.2;
    }
    console.log(`${arrBasket.rusis} kainuoja ${arrBasket.kaina} Eur`);
  }
};

basket(krepselis);
