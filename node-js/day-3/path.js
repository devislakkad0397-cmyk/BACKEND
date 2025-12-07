const path = require("path")

// path of file and dir 

console.log("filepath :  ", __filename)
console.log("dirname :  ",  __dirname)

//school menegment system
// * 1.join()

// folder/student/data

const filepath = path.join("folder","student","data.txt")

console.log(filepath)

const parsedDataPath = path.parse(filepath)
const resolvedPath = path.resolve(filepath)
const extname = path.extname(filepath)
const basename = path.basename(filepath)
const dirname = path.dirname(filepath)

console.log({parsedDataPath,resolvedPath,extname,basename,dirname})

//JSON.stringfy() ====> object to json
//JSON.parse() ====> json to object
