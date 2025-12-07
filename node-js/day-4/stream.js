const { read, write } = require("fs");
const {Readable , Writable} = require("stream");

const readableStream = new Readable({
    highWaterMark :  4, //threshould
    read() {}, // ====> short method // =========> read : function(){} (long method)
});
const WritableStream = new Writable({
    write(streamData) {
        // console.log("write...",streamData)
         console.log("write...",streamData.toString());
    },
})

readableStream.on("data",(chunk)=>{
    // console.log("chunk : ",chunk.toString());
     console.log("chunk : ",chunk);
     WritableStream.write(chunk);

});

console.log(readableStream.push("Hello"))

// stream can not defaind size but we can make sceleble struchar ke liye aek chiz hoti he or chiz high water mark hota he
