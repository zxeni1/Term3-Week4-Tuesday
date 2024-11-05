console.log("This file is running!");

let defaultEnv = {
    PORT: 5050,
    DATABASE_URI: "asdasd:asdasd",
    JWT_SECURITY_KEY: "asdasd",
    SECRET_KEY: "apple",
    SECURE_API_KEY: "asdpsaspd"
};

let contentToWrite = "";

// What it should look like;
// PORT=5050
// DATABASE_URI="asdasd:asdasd",
// JWT_SECURITY_KEY="asdasd",
// SECRET_KEY="apple",
// SECURE_API_KEY="asdpsaspd"

Object.keys(defaultEnv).forEach(
    envkey => {
        // Add a line to the contentToWrite variable with the key name and value
        contentToWrite += `${envkey}=${defaultEnv[envkey]}\n`;
    }
);

// Give us an idea of what gets stored in the file
console.log(contentToWrite);

// All the file handling opperations will be preformed using fs
const fs = require("node:fs");

// Sunchronous Way
//fs.writeFileSync(".env", contentToWrite);

//Asynchronous Way
fs.writeFile(".env", contentToWrite, (error) => {
    if (error){
        console.log("error encountered: ", error.message);
    }
    else {
        console.log("File written successfully!");
    }
});

console.log("File has been created.");