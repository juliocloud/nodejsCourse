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