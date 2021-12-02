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

    // api/todos/:id -> fetch todo with id
    else if(req.url.match(/\/api\/todos\/([0-9]+)/)&&req.method=='GET'){
        try{
            const id=req.url.split('/')[3]
            const todo= await new Todo().getToDo(id)
            res.writeHead(200, { "Content-Type": "application/json" })
            res.end(JSON.stringify(todo))
        }
        catch(err){
            res.writeHead(404, { "Content-Type": "application/json" })
            res.end(JSON.stringify({message:err}))
        }
    }

    // api/todos/:id -> delete specific todo with id
    else if(req.url.match(/\/api\/todos\/([0-9]+)/)&&req.method=='DELETE'){
        try{
            const id=req.url.split('/')[3]
            const todo= await new Todo().deleteToDo(id)
            res.writeHead(200, { "Content-Type": "application/json" })
            res.end(JSON.stringify(todo))
        }
        catch(err){
            res.writeHead(404, { "Content-Type": "application/json" })
            res.end(JSON.stringify({message:err}))
        }
    }

    // api/todos/:id -> update specific todo with id
    else if(req.url.match(/\/api\/todos\/([0-9]+)/)&&req.method=='PATCH'){
        try{
            const id=req.url.split('/')[3]
            const updated_todo= await new Todo().updateToDo(id)
            res.writeHead(200, { "Content-Type": "application/json" })
            res.end(JSON.stringify(updated_todo))
        }
        catch(err){
            res.writeHead(404, { "Content-Type": "application/json" })
            res.end(JSON.stringify({message:err}))
        }
    }

    // api/todos/ -> to add new todo
    if(req.url==='/api/todos'&&req.method=='POST'){

        let todoData=await getReqData(req)
        const todo=await new Todo().createToDo(JSON.parse(todoData))
        res.writeHead(200, { "Content-Type": "application/json" })
        res.end(JSON.stringify(todo))
    }

    //handle unexpected requests
    else{
        res.writeHead(404,{'Content-Type':'application/json'})
        res.end(JSON.stringify({ message: "Route not found" }))
    }
})

server.listen(PORT,()=>{
    console.log('Server running on',PORT)
})