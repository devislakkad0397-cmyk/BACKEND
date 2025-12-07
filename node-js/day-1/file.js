const { error } = require("console")
const fs = require("fs") //---> inbulit

// sync blocking code  , async no blocking code 

//write

// ---------- WRITE (Sync) ----------
fs.writeFileSync("./text.txt", "hey my name is devis sync code file ");



// ---------- WRITE (Async) ----------
fs.writeFile("./test.txt", "async code file ", (err) => {
    if (err) {
        console.log("Error:", err);
    } else {
        console.log("File written successfully (async)");
    }
});


// ---------- READ (Sync) ----------
const res = fs.readFileSync("./text.txt", "utf8");
console.log("Sync Read:", res);


// ---------- READ (Async) ----------
fs.readFile("./test.txt", "utf-8", (error, response) => {
    if (error) {
        console.log("Error:", error);
    } else {
        console.log("Async Read:", response);
    }
});

// ---------------- UPDATE ----------------

// Sync overwrite update
fs.writeFileSync("./text.txt", "This file is updated (sync overwrite)");

// Async overwrite update
fs.writeFile("./test.txt", "This file is updated (async overwrite)", (err) => {
    if (err) console.log(err);
});


// Sync append update
fs.appendFileSync("./text.txt", "\nAppended new line (sync)");


// Async append update
fs.appendFile("./test.txt", "\nAppended new line (async)", (err) => {
    if (err) console.log(err);
});


// ---------------- DELETE ----------------

// Sync delete
fs.unlinkSync("./text.txt");
console.log("text.txt deleted (sync)");


// Async delete
fs.unlink("./test.txt", (err) => {
    if (err) console.log(err);
    else console.log("test.txt deleted (async)");
});
