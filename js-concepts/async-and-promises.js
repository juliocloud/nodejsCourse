//Async code is not executed synced with the rest of the normal synchronous code
setTimeout(() => {
    console.log("Async after 1 seconds")
}, 1)

console.log("Sync code")