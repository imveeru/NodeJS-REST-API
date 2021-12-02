const http=require('http');
const PORT = process.env.PORT||5000;

const server=http.createServer(async(req,res) => {
    if(req.url==='/api'&&req.method=='GET'){
        res.writeHead(200,{'Content-Type':'application/json'})
        res.write('Hi! Fetched from API (/api)')
        res.end()
    }
    else{
        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify({ message: "Route not found" }))
    }
})

server.listen(PORT,()=>{
    console.log('Server running on',PORT)
})