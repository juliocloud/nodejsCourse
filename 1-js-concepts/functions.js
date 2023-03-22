//Basic declaration
function addNumbers(a, b){
    return a + b 
}

console.log("Add numbers: " + addNumbers(2, 5))

//Old way
const multiplyNumbers = function (a, b){
    return a * b 
}

console.log("Multiply numbers: " + multiplyNumbers(2, 5))

//Arrow function
/*
* Arrow functions don't allow the use of 'this' keyword, 
* meaning that you can't do a mention of the own function
*/
const divideNumbers = (a, b) => {
    return a/b
}

console.log("Divide numbers: " + divideNumbers(210, 2))

//Simplified arrow function
/*
* Arrow function have many simplifications:
* 1. If you use only one parameter, you can omit the 
* parenthesis
*
* 2. If you have an one-liner function, you can
* omit the 'return' keyword
*/
const increaseNumber = a => a + 1

console.log("Increase number: " + increaseNumber(2))

//Method syntax
const person = {
    name: "Julio",
    birthDate: 2004 , 
    currentYear: 2023,
    age() {
        return this.currentYear - this.birthDate
    }
}

console.log("Person Age: " + person.age())

//Method alternative syntax
const dude = {
    name: "Julio",
    birthDate: 2004 , 
    currentYear: 2023,
    age: function() {
        return this.currentYear - this.birthDate
    }
}

console.log("Dude age: " + dude.age())