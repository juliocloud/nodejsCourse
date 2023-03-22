//Asynchronous code gets executed separately from synchronous code
setTimeout(() => { //Callbacks function is called later
     console.log("Async with 2 seconds timeout")
}, 1)

console.log("Synchrnous code gets executed first")




const fetchData = callback => {
     callback("Done")
}

fetchData( (text) => {
     console.log(text)
})