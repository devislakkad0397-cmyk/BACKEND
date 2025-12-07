const EventEmitter = require("events"); // ===> this is constractor in node so can enisaliys


// creat instent of enentemitter
const emitter = new EventEmitter()  //------> enisayliz consractor in emitter (all power of eventemitter in emitter)

//event has to basic key methode 
// first is  =====>   



//*************************************    m-----1     ****************************************** */
//  on(eventname , listener) =======>creat event coustem event
// emitter.on("GREET",(username , id )=>{
//     console.log(`hello world from ${username} and id is ${id}`)
// })

// // emitte(eventname , [args])  =======>excute

// emitter.emit("GREET","devis","23fkf32ryr3tuv3yug")

//*************************************    m-----2     ****************************************** */

 //on(eventname , listener)// =======>creat event coustem event
emitter.on("GREET",(args)=>{
    console.log(`hello world from ${args.username} and id is ${args.id}`)
})

// emitte(eventname , [args])  =======>excute

emitter.emit("GREET",{
    username : "devis",
    id: "fg3deye3q33egfffyf67evdiuh89icblufsgygeu"

})