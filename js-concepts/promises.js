const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done")
        }, 1000)
    })
    //I *MUST* return the promise. Otherwise it will return me errors
    return promise 
    
}

setTimeout(() => {
    fetchData()
        .then((text) => {
        console.log(text)
        return fetchData()
    })
        .then( text => {
            console.log(text)
        })
}, 1000)