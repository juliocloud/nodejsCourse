/*
* Requiring from a global package (not local)
*/
const http = require('http') 

/*
* As long as there are listeners registered, the event loop will keep executing
*/
function rqListener(req, res){
    console.log(req)
    process.exit() 
    // We generally don't call an exit action. In this case, wwe're finishing the server immediatly after a requisition
}

const server = http.createServer(rqListener) //Request Listener as an argument (function that will execute for every request)

/*
* Listening to the server in the port 3000. Whenever I try to access localhost on port 3000
* it will return to me the console log of the requisition
*/
server.listen(3000);