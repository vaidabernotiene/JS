/* CALL back function ---------------------*/
function alertName(name) {
    alert(name)
}

function consLogFunc(name){
    console.log(name)
}

function corFunc(name, funcParam) {
    funcParam(name)
}

corFunc('Vaida',consLogFunc)
/* asinhronine funkcijoje naudoti vienodo tipo kintamuosius
/************************************ */
function sumNmb(num1, num2) {
    let sum = num1 + num2
    console.log(sum)
}
sumNmb(5,6)
/************************************ */

