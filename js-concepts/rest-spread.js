const hobbies = ["Soccer", "Cooking"]
/*
* Spread operator
* The spread operator will pull out all elements of the original array and put it 
* in the new array we want
*/
const transitionedArray = [...hobbies]
console.log("Transitioned array: ")
console.log(transitionedArray)

//...it also works with objects
const firstObject = {
    name: "Name",
    age: 20,
    greet() {
        console.log("Greetings!!!")
    }
}

const copiedObject = {...firstObject}
console.log(copiedObject)

/*
* Rest operator
* The rest operator will allow us to create flexible arguments to functions, merging
* lots of arguments into one
*/

const toArray = (...items) => {
    return items
}

console.log(toArray(1,2,3,45))