


console.log(global);
console.log(Object.getOwnPropertyNames(global))

//ex---->

setTimeout(()=>{
    console.log("hello i am from global")
},5000)  //===> print after 5 sec


let count = 0;
 
const interval = setInterval(() => {

    console.log(`Interval count : ${++count}`)
        if(count === 5){
            clearInterval(interval)
        }
    
    
}, 2000);