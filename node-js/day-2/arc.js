process.env.UV_THREADPOOL_SIZE = 5;


// const fs = require("fs")



// setImmediate(() => {
//     console.log("immediate")
// }, 0)

// console.log("console")

// setTimeout(() => {
//     console.log("timeout")
// }, 0)


let start = Date.now(); 

const crypto = require("crypto");

crypto.pbkdf2("password-1", "salt1", 10000, 1024, "sha512", () => {
    console.log(`${Date.now() - start}ms done`);
});
crypto.pbkdf2("password-1", "salt1", 10000, 1024, "sha512", () => {
    console.log(`${Date.now() - start}ms done`);
});
crypto.pbkdf2("password-1", "salt1", 10000, 1024, "sha512", () => {
    console.log(`${Date.now() - start}ms done`);
});
crypto.pbkdf2("password-1", "salt1", 10000, 1024, "sha512", () => {
    console.log(`${Date.now() - start}ms done`);
});
crypto.pbkdf2("password-1", "salt1", 10000, 1024, "sha512", () => {
    console.log(`${Date.now() - start}ms done`);
});
crypto.pbkdf2("password-1", "salt1", 10000, 1024, "sha512", () => {
    console.log(`${Date.now() - start}ms done`);
});


// output 

//1 ==== top modle ----->  first exicute
 
     // 1 ====  console


// 2 ====  requrie module
// 3 ==== event callback  
// 4 ====  event loop start                offlode
                                        // thread pool    (worker work)
                                        // cpu intensiv ---> fs, os ,crypot ,compression





   // 1 === timer call back (settimeout,setintarval.....)
   // 2 === io polling (use fs os etc but we do not use in program)
   // 3 === setimmiate callback
   // 4 === close callback 


 // check
 
   // ispending (yes)--->loop start (reapt)
   // ispending (no)--->brack the loop




//  -=-=-=-=-=-----=---=--=---=--=--=-=-  ans  ==-=--=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=


// console
// setImmediate


//console
//settimeout
//setimmedite
