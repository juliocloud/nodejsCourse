//Async code is not executed synced with the rest of the normal synchronous code
setTimeout(() => {
    console.log("Async after 1 second")
}, 1)

console.log("Sync code")

/*
* This code is a function which receive another function as a parameter
* We don't know which function is it, but we know that we pass "Done!" as a
* parameter to this function
* 
*/
const fetchData = ( callback => {
    callback("Done!") 
    
})

setTimeout(() => {
    fetchData((text) => {
        console.log(text)
    })
}, 2000)
