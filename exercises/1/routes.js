
const requestListener = (req,res) => {
    const url = req.url;
    const method = req.method;

    if(url == '/'){
        console.log("Greetings!");
    }
}

exports.listener = requestListener