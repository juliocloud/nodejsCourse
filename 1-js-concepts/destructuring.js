const person = {
    name: "Julio",
    age: 18,
    email: "juliocesarjuriolli@gmail.com"
}

//If I want to print the value "name" of an object
//I can use destructuring to extract only this specific 
//element of it
const printName = ({ name }) => {
    console.log(name)
}

//I pass the whole object as the argument, but the function only "sees"
//the person.name
printName(person)

//Also works with arrays. Note that when I reference a value through destructuring
//with arrays, the variables follows the order of the array's indexes
const family = ["John", "Emma", "Robert", "Donald", "Lindsay"]

//Even if I called member1 "foo", it would give me family[0]
const [member1, member2] = family
console.log(member2)

