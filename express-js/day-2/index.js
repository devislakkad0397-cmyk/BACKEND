import express from "express"
import userRouter from "./routers/usre.routes.js";

const app = express();

app.use("/api/v1/users",userRouter);

app.get("/",(req , res)=>{
    res.send("hello devis")
});


app.listen(3000 , ()=>{
    console.log("server is runnning on port 3000");
})