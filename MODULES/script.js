import { mathsFunc } from "./maths.js"; 

document.querySelector('button').addEventListener('click', ()=>{
     let numb = mathsFunc(10)
     console.log(numb)
})

import { months } from "./maths.js";
console.log(months)

//Sukurkite modulį (t.y. file'ą - multi.js), kuriame būtų viena eksportuota (default) funkcija - multiplikacija. 
//Ji priims du skaičius kaip parametrus ir grąžins šiuos skaičius sudaugintus. 
//Pagrindiniame JS file'e (script.js) importuokite ir panaudokite šį modulį.

import { multiFunc } from "./multi.js"; 
console.log(multiFunc(5, 4))
