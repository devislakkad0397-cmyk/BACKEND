// transfaring havey data  from one end to seconed end by chanks(buffers ===> pisical space in memory)  ====> <<<<<stream>>> 


const http = require("http")


const fs = require("fs");
const Stream = require("stream");
const {Transform , pipeline} = require("stream");
const { error } = require("console");

const server = http.createServer((req , res)=>{

 // -----------------------  // downloding file in bed way //----------------------


        //  const file = fs.readFileSync("sample.txt", "utf8");
        // res.end(file);

//------------------------- / downloding file in good way (using streaming)/--------------------------


        // const readableStream = fs.createReadStream("sample.txt")
        // readableStream.pipe(res)
        // // res.end()

// ====================  coping file in bed way ===============================================


        // const file = fs.readFileSync("sample.txt","utf-8")
        // fs.writeFileSync("output.txt",file)
        // res.end()


// ========================= coping file in good way (using streaming)==========================

    // const readStream = fs.createReadStream("sample.txt");
    // const writeStream = fs.createWriteStream("output.txt");

    //     readStream.on("data",(chunk)=>{
    //     console.log("chunk : ",chunk)
    //     writeStream.write(chunk);
    // })
// ==================== string processing  ================================
// uppercase
//Success----> devis
    const readStream = fs.createReadStream("sample.txt");
    const writeStream = fs.createWriteStream("output.txt");

    const tranformStream = new Transform({
        transform(chunk, encoding,calback){
                // const modifiedWord = chunk.toString().toUpperCase().replaceAll("SUCCESS" , "devis")
                  const modifiedWord = chunk.toString().toUpperCase().replaceAll("SUCCESS" , "devis")
                  // tranform is readable or writeable both od pipe
                  calback(null , modifiedWord)

        }
    })


//=============================bed way================================


// readStream.on("data",(chunk)=>{
//     const modifiedWord = chunk.toString().toUpperCase().replaceAll("SUCCESS" , "devis")
//     writeStream.write(modifiedWord)
// })
//         res.end()
//==========================good way (tranfoem) =================================
        // readStream.pipe(tranformStream).pipe(writeStream);
        // res.end()

        //========== 2 good way
        pipeline(readStream,tranformStream,writeStream,(error)=>{
            console.log(error);
        })
        res.end()

});

server.listen(8080 ,()=>{
    console.log("server is connected at " , 8080)
})

//Stream ====> writeable and readable
// (Readable stream (source)<-------left)<---------<pipe(methode)>------->(right---->Writable stream (destination))

// req:readableStream
// res:WritableStream