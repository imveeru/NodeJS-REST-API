const http=require('http');
const PORT = process.env.PORT||5000;

const Todo = require("./controller");
const { getReqData } = require("./utils");

const server=http.createServer(async(req,res) => {
    // api/todos -> fetch all todos
    if(req.url==='/api/todos'&&req.method=='GET'){
        const todos=await new Todo().getToDos()
        res.writeHead(200, { "Content-Type": "application/json" })
        res.end(JSON.stringify(todos))
    }

    // api/todos/1 -> fetch todo with id 1
    else if(req.url.match(/\/api\/todos\/([0-9]+)/)&&req.method=='GET'){
        try{
            const id=req.url.split('/')[3]
            const todo= await new Todo().getToDo(id)
            res.writeHead(200, { "Content-Type": "application/json" })
            res.end(JSON.stringify(todo))
        }
        catch(err){
            res.writeHead(400, { "Content-Type": "application/json" })
            res.end(JSON.stringify({message:err}))
        }
    }

    //handle unexpected requests
    else{
        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify({ message: "Route not found" }))
    }
})

server.listen(PORT,()=>{
    console.log('Server running on',PORT)
})