import express from 'express';
import { generateToken } from '../utils/token.utils.js';



const router = express.Router();

//genrate token

router.get("/generate-token" , (req , res)=>{
    const token = generateToken();

    res.status(200).send({
        message:"token genrated",
        token:token
    })
})


//home route 



router.get("/" , (req,res)=>{
    res.status(200).send({
        message:"welcome to home page 🏡"
    })
})

export default router


