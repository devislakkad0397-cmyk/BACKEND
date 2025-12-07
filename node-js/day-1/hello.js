const os = require("os")
console.log(os.cpus().length)
 const maths = require("./math")// ---> not inbuilt make owen 

console.log("devis")

console.log("the value is " , maths.AddFunc(12,34) + " and  " +maths.SubFunc(4,2) )


const {AddFunc,SubFunc} = require("./math")

console.log("devis")

console.log("the value is " , AddFunc(12,34) + " and  " + SubFunc(4,2) )


