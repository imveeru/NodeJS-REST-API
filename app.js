const http=require('http');
const PORT = process.env.PORT||5000;

const Todo = require("./controller");
const { getReqData } = require("./utils");

const server=http.createServer(async(req,res) => {
    if(req.url==='/api/todos'&&req.method=='GET'){
        const todos=await new Todo().getToDos()
        res.writeHead(200, { "Content-Type": "application/json" })
        res.end(JSON.stringify(todos))
    }
    else{
        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify({ message: "Route not found" }))
    }
})

server.listen(PORT,()=>{
    console.log('Server running on',PORT)
})