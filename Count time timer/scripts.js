//Užduotis:
//Sukurti Chronometrą su JS.
//1. Sukurti 'start/stop' mygtuką, kuris paleistų ir sustabdytų chronometrą.
//2. Sukurti 'reset' mygtuką, kuris sustabdytų ir panaikintų chronometro reikšmes ('nunulintų').
//3. Sukurti 'lap' mygtuką, kurį paspaudus laikas išsisaugotų ir būtų matomas apačioje. Šį mygtuką galima spausti kelis kartus ir taip užfiksuoti laikus (pvz. lenktynėse). Sukurti ir 'delete times' mygtuką, kuris šiuos laikus ištrintų.
//4. Išsaugoti laikai su 'lap' funkcija turi būti matomi net ir perkrovus puslapį.

// class Timer {
//   constructor(hh, mm, ss, ms) {
//     this.hh = hh;
//     this.mm = mm;
//     this.ss = ss;
//     this.ms = ms;
//   }
//   startFunc() {
//     let i = 0;
//     const msEl = document.querySelector(".miliseconds");
//     const ssEl = document.querySelector(".seconds");
//     const mmEl = document.querySelector(".minutes");
//     const hhEl = document.querySelector(".hours");
//     function incr() {
//         i++
//         msEl.textContent = i;
//         if (msEl.textContent == 60) {
//             msEl.textContent = this.ms
//             return
//             ssEl.textContent = i
//         } else {
//             // console.log('pabaiga')
//         }
//     //     do {
//     //     console.log(i);
//     //     i++;
//     //     msEl.textContent = i;
//     //   } while (i < 60);
//     }
//     //   setInterval(incr, 100)
//   }
// }

// const startBtn = document.querySelector(".timer-btn-start");
// console.log(startBtn);

// startBtn.addEventListener("click", startTimer);
// function startTimer() {
//   console.log("Paleidziu");
//   timer.startFunc();

//   startBtn.textContent = 'Stop'
//   startBtn.style.backgroundColor = 'Red'

// }
// const timer = new Timer(0, 0, 0, 0);

// console.log(timer);

const msEl = document.querySelector(".miliseconds");
const ssEl = document.querySelector(".seconds");
const mmEl = document.querySelector(".minutes");
const hhEl = document.querySelector(".hours");

let msec = 0;
let sec = 0;
let mm = 0;
let hh = 0;

let startTimer = null;
let flag = false;

const startBtn = document.querySelector(".timer-btn-start");
const lapBtn = document.querySelector(".timer-btn-lap");

// console.log(startBtn);

function timer() {
  interval = setInterval(addSecFunc, 10);
  console.log(interval);
}

function stopTimer() {
  flag = !flag;
  if (flag) {
    startBtn.textContent = "Stop";
    startBtn.style.backgroundColor = "Red";
  } else {
    startBtn.textContent = "Start";
    startBtn.style.backgroundColor = "green";
  }
}

function addSecFunc() {
  msEl.textContent = msec;

  if (msEl.textContent < 99) {
    msec +=1;
    msEl.textContent = msec
  } else {
    msec = 0
    msEl.textContent = "00";
  }
  
  if (ssEl.textContent < 59) {
    sec +=1;
    msEl.textContent = msec
  } else {
    sec = 0
    ssEl.textContent = "00";
  }
  
}

startBtn.addEventListener("click", function () {
  function startInterval() {
    timer();
  }
  startInterval();
  clearInterval(startTimer);
  stopTimer();
});
