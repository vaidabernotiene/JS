let mobileLinks = document.getElementsByClassName("mobile-links")[0];

document.getElementsByClassName("menu")[0].addEventListener("click", () => {
  if (mobileLinks.style.display === "block") {
    console.log("cia turiu paslepti elementa paspaudus");
    mobileLinks.style.display = "none";
  } else {
    console.log("cia rodau, nes yra nematomas paspaudus");
    mobileLinks.style.display = "block";
  }
});
/* ************** ARRAY **************** */
let arr = [2,5,6,8,7,11]
console.log(...arr)
console.log(Math.max(...arr))
for (let index = 0; index < arr.length; index++) {
  // 1 var. saraso isvedimui
  console.log(arr[index])
  // 2 var.
  const element = arr[index];
  console.log(element)
}
const sum = [...arr].reduce((total, el) => total + el);
console.log(sum);

/* *************** OBJECT ************* */
let obj = {
  vardas: 'Vaida',
  pavarde: 'Bernotiene',
  gimimo_metai: 1979
}

for (const [key, value] of Object.entries(obj)) {
  console.log(`${key}: ${value}`)
}

/* ********************************** */
let arr1 = [2,5,6,8,7,11,90]
if (Math.max(...arr1)<2) {
  console.log('visi skaiciai mazesni uz 2')
} else if (Math.min(...arr1)> 90){
  console.log('visi skaiciai didesni uz 90')
}else if (Math.min(...arr1)>= 2 && Math.max(...arr1)<=90){
  console.log('skaiciai nuo 2 iki 90')
}
else {
  console.log('nieko')
}

/* ********************************** */
let snow = confirm('Tegul sninga?')
console.log(snow)
if (snow) {
  // sninga, nes bus true
} else {
  // nesninga, nes bus false
}

/* ********************************** */
let prm = prompt('Kiek tau metu? ')
console.log(prm)
