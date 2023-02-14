/* ************************************************************** */
// let randNum = Math.floor(Math.random() * 101);
// console.log(`Sugeneruotas skaicius: ${randNum}.`);
// let vartNum = prompt("Ivesk skaiciu nuo 0 iki 100: ");

// if (vartNum >= 0 && vartNum <= 100) {
//   if (vartNum % 1 !== 0) {
//     console.log ("Ivesk sveika skaiciu!");
//   } else if (vartNum == randNum) {
//     console.log("Skaiciai vienodi!");
//   } else if (vartNum > randNum) {
//     console.log("Tavo skaicius didesnis uz sugeneruota!");
//   } else if (vartNum < randNum) {
//     console.log("Tavo skaicius mazesnis uz sugeneruota!");
//   }
// } else {
//   console.log("Klaida.Neteisingas skaicius.Perkrauk puslapi!");
// }
/* ************************************************************** */

// let userAnim = prompt("Irasyk viena is gyvunu: Suo, Kate, Karve, Avis");
// if (userAnim === "Suo") {
//   alert("Suo");
// } else if (userAnim === "Kate") {
//   alert("Kate");
// } else if (userAnim === "Karve") {
//   alert("Karve");
// } else if (userAnim === "Avis") {
//   alert("Avis");
// } else {
//   alert("Tokio gyvuno nera!");
// }

// SWITH CASE *************************************************** */

// switch (userAnim) {
//   case "Suo":
//     alert("Suo");
//     break;
//   case "Kate":
//     alert("Kate");
//     break;
//   case "Karve":
//     alert("Karve");
//     break;
//   case "Avis":
//     alert("Avis");
//     break;
//   default:
//     alert("Tokio gyvuno nera!");
//     break;
// }

// Terrner operator ********************************************* */

let weekDay = -82;
weekDay >= 1 && weekDay <= 5
  ? console.log("Darbo diena")
  : weekDay === 6 || weekDay === 7 // '||' - or
  ? console.log("Savaitgalis")
  : console.log("Neteisingi duomenys");

/*--------------*/
let val = 5;
let rezult =
  val < 20 ? "Skaicius mazesnis uz 20" : "Skaicius didesnis arba lygus 20";
console.log(rezult);

// Uzduotis
// let randNum = Math.floor(Math.random() * 101);
let randNum = 20;
// console.log(`Sugeneruotas skaicius: ${randNum}.`);
// let vartNum = prompt("Ivesk skaiciu nuo 0 iki 100: ");
let vartNum = 5;
vartNum >= 0 && vartNum <= 100
    ? vartNum < randNum
      ? console.log("Tavo skaicius mazesnis uz sugeneruota!")
      : vartNum > randNum
      ? console.log("Tavo skaicius didesnis uz sugeneruota!")
      : console.log("Skaiciai vienodi!")
  : console.log("Klaida.Neteisingas skaicius.Perkrauk puslapi!");

// Uzduotis
const animals = ["Kate", "Suo", "Papuga", "Ziurke", "Avis"];
const randIndex = Math.floor(Math.random() * 5);

switch (animals[randIndex]) {
  case "Kate":
    console.log("Istraukta Kate");
    break;
  case "Suo":
    console.log("Istrauktas Suo");
    break;
  case "Papuga":
    console.log("Istraukta Papuga");
    break;
  case "Ziurke":
    console.log("Istraukta Ziurke");
    break;
  case "Avis":
    console.log("Istraukta Avis");
    break;
  default:
    console.log("Klaida");
}
