// !OBJECTIVE
// * CREATE A PROGRAM USING NODE-JS EVENTEMITTER THAT:

// ? LISTENS FOR MULTIPLE TYPES OF USER EVENTS (E.G LOGIN , LOGOUT , PURCHASE , AND PROFILE UPDATE)✅
// ? tRACKS HOW MANY TIMES EACH EVENT IS EMITTED.
// ? LOGS A SUMMARY OF ALL EVENTS OCCURRENCES WHEN A SPECIAL SUMMARRY EVENT IS TRIGGERED


// !REQUIREMENT

// ? create at least four custom events
// ? emit these events multiple times with different argumensts ( e.g username , item purchased)
// ? tracks and store the count of each event type.
// ? define a summary events that logs a detailed report of how many times each event was triggered




const EventEmitter = require("events");
const fs = require("fs");
const path = require("path");

const userEmitter = new EventEmitter();

const eventCounts = {
    login: 0,
    logout: 0,
    purchase: 0,
    profileupdate: 0
};

// Always create JSON file in same folder as script
const logFile = path.resolve(__dirname, "eventlog.json");

// Load file if exists
if (fs.existsSync(logFile)) {
    const data = fs.readFileSync(logFile, "utf-8");
    Object.assign(eventCounts, JSON.parse(data));
}

// Save function
function saveCounts() {
    fs.writeFileSync(logFile, JSON.stringify(eventCounts, null, 2));
}

// Event listeners
userEmitter.on("LOGIN", (username) => {
    eventCounts.login++;
    console.log(`${username} logged in`);
    saveCounts();
});

userEmitter.on("LOGOUT", (username) => {
    eventCounts.logout++;
    console.log(`${username} logged out`);
    saveCounts();
});

userEmitter.on("PURCHASE", (username, item) => {
    eventCounts.purchase++;
    console.log(`${username} purchased ${item}`);
    saveCounts();
});

userEmitter.on("PROFILE_UPDATE", (username, field) => {
    eventCounts.profileupdate++;
    console.log(`${username} updated field: ${field}`);
    saveCounts();
});

// SUMMARY
userEmitter.on("SUMMARY" , ()=>{
    console.log("\n Event Summary:")
    console.log(`Logins: ${eventCounts.login}`)
    console.log(`Logouts: ${eventCounts.logout}`)
    console.log(`Purchases: ${eventCounts.purchase}`)
    console.log(`Proifle Update: ${eventCounts.profileupdate}`)
})

// Emit events
userEmitter.emit("LOGIN", "Devis");
userEmitter.emit("LOGOUT", "Devis");
userEmitter.emit("PURCHASE", "Devis", "iPhone 17 Pro Max");
userEmitter.emit("PROFILE_UPDATE", "Devis", "Email");
userEmitter.emit("SUMMARY");
