function mainFunc(a) {
    return a
}

const rezult = mainFunc(firstFunc())
console.log(rezult)

function firstFunc() {
    const c = 10
    return c
}

const first = firstFunc()
console.log(first)


function printToConsole(params) {
    let name = 'Hello'
    console.log(name) // Hello
}
printToConsole()
console.log(name) // tuscia

