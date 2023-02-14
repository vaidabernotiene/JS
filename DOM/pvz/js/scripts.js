let btn1 = document.getElementsByClassName('button1')[0]
let btn2 = document.getElementsByClassName('button2')[0]
let boxes = document.getElementsByClassName('box1')

// random color function ***************** */
const randColor = () => {
    return (
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
        .toUpperCase()
    );
  };
//**************************************** */

btn1.addEventListener('click', function () {
    // console.log('paspaudziau ant 1 mygt')
    for (const iterator of boxes) {
        iterator.style.backgroundColor = randColor()
        console.log(iterator)
    }
    
        
    // boxes[5].textContent = 'naujas tekstas'
    // boxes[5].style.backgroundColor = randColor()
    
    // ---------------------------------------
    // if (boxes[5].innerText == 6) {
    //     boxes[5].style.backgroundColor = randColor()
    // }
    // boxes[5].textContent = 89

    // console.log('pirmas')
})

btn2.addEventListener('dblclick', function () {
    console.log('antras')
    boxes[1].textContent = 'pakeistas antros dezutes tekstas'
    boxes[1].style.backgroundColor = randColor()
})