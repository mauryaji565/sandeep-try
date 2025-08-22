let random = Math.random()
let a = prompt("Enter your fist Number")
let b = prompt("Enter your secound number")
let c = prompt("Enter opretion")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}
if (random >0.1) {
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    c = obj[c]
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}