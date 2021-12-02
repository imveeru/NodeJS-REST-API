const getReqData=(req)=>{
    return new Promise((resolve,reject)=>{
        try{
            let body=""

            // listening to data sent from user
            req.on("data",(chunk)=>{
                //appending user input to body
                body += chunk.toString()
            })

            //listening till end
            req.on("end",()=>{
                //send the data
                resolve(body)
            })
        }
        catch(err){
            reject(err)
        }
    })
}

module.exports = {getReqData}