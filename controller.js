const data = require("./data");

class Controller{

    //get all todos
    async getToDos(){
        return new Promise((resolve, reject) => {resolve(data)})
    }

    //get a single todo
    async getToDos(id){
        return new Promise((resolve, reject)=>{
            let todo=data.find(data=>data.id===parseInt(id))
            if(todo){
                resolve(todo)
            }
            else{
                reject(`Todo with id ${id} not found`)
            }
        })
    }

}