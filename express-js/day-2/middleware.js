//npm init --y
//npm i express
//nodemon
// "dev":"nodemon index.js" ==>remove type
//"type": "module"

import express from "express"
const app = express();


//3 type of middleware  hote he 
//1.global

function SayHiWiddleware(req,res,next){

    console.log("hi im middleware");
    next();

}
// app.use(SayHiWiddleware);

//2.specific rout middalware
app.get("/",SayHiWiddleware,(req , res)=>{
    res.send("hello devis")
});
//3.inbuilt middleware

// app.use(express.json());


app.get("/users",(req , res)=>{
    res.send("users page")
})

app.listen(3000 , ()=>{
    console.log("server is runnning on port 3000");
})