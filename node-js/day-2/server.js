//npm init --y
const http = require("http") //---> this http modul use for creat server

//----> creat log file and this file tall to who request and konse rout par request par hit kara

const fs = require("fs")

const PORT =8080

const myServer = http.createServer((request , Response)=>{

    const log = (`${Date.now()}:& from ${request.url} New request received\n`);
    fs.appendFile("log.txt",log , (err)=>{
        if(err){
            console.error("error writing to the log file : " , err);
            Response.statusCode = 500; //-->server error
            Response.end("internal server error")
            return;

        }
        Response.end("hello my name is devis i make server first time")
    })
    // console.log(request)

    // Response.end("hello i am server")     //---> creat server

})

//--->listen a server

myServer.listen(PORT,()=>{
    console.log(`server is connected 🔗 at ${PORT}`)
})