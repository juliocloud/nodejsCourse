const hobbies = ["Drawing", "Cooking", "Basketball"]

console.log(hobbies.map((hobby, index) => { 
    const newIndex = index + 1;
    return "My hobby " + newIndex + " is " + hobby  
}))

//The map method is a way of going through the whole
//array and changing it in the way you want

hobbies.push("Soccer")

//Although the hobbies array is a constant, when we call a push method
//it does not change the location of the array in the memory. 
console.log(hobbies)

//When you use the slice method, you're copying the values of the original array
//to another, without modifying the first one
const slicedArray = hobbies.slice()
console.log("Sliced array: ")
console.log(slicedArray)

//If you try to manually insert the original array inside of a new one, it will
//create an array with another array inside of it (wrong way of doing it)
const copiedArray = [hobbies]
console.log("Copied array: ")
console.log(copiedArray)