let num1 = +(window.prompt("Please enter the first number"))
let num2 = +(window.prompt("Please enter the second number"))
let sum = num1 + num2
let subtraction = num1 - num2
let product = num1 * num2
let divide = (num2 != 0) ? num1/num2 : "Can't divide by zero"
document.write(`<p> ${num1} + ${num2} = ${sum} </p> `)
document.write(`<p> ${num1} - ${num2} = ${subtraction} </p> `)
document.write(`<p> ${num1} * ${num2} = ${product} </p> `)
document.write(`<p> ${num1} / ${num2} = ${divide} </p> `)