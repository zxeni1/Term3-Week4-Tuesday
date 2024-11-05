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

// All the file handling operations will be performed using fs
// const fs = require("node:fs");

// Synchronous way
// fs.writeFileSync(".env", contentToWrite);

// Asynchronous way
// fs.writeFile(filepath, fileContents, callback);

// console.log("Before the fs callback");
// fs.writeFile(".env", contentToWrite, (error) => {
//     console.log("Reached the callback function");
//     if (error){
//         console.log("Error encountered: ", error.message);
//     }
//     else {
//         console.log("File written successfully!");
//     }
// });
// console.log("After the fs callback");

// console.log("File has been written.");

// Promise version of node-fs
const fs = require("node:fs/promises");

// console.log("Before the promise");
// fs.writeFile(".env", contentToWrite)
// .then(() => {
//     console.log("After the file has been created.");
//     console.log("Some extra operation..");
//     throw new Error("You got an error...");
// // }).then(() => {
//     // fs.writeFile(".testenv", contentToWrite)
//     // .then(() => {
//     //     console.log("After the file has been written in the 2nd file.");

//     //     fs.writeFile(".testenv1", contentToWrite)
//     //     .then(() => {
//     //         console.log("Writing to the third file...");
//     //     }).catch((error) => {
//     //         console.log("Error countered in the third file storage: ", error.message);
//     //     });

//     // })
//     // .catch ((error) => {
//     //     console.log("Error countered in the second file storage: ", error.message)
//     // });
// }).catch((error) => {
//     console.log("Error encountered: ", error.message);
    
// }).finally(() => {
//     console.log("All the file writing operations has been executed.");
// });
// console.log("After the promise");

async function writeEnvFile(){
    console.log("Before the await");
    try {
        let result = await fs.writeFile(".env", contentToWrite);
        console.log("Await process executed here...");
    } catch (error) {
        console.log("Error occured: ", error.message);
    }
    console.log("After the await");

}

writeEnvFile();

async function app() {
    console.log("Before calling the app function");
    await writeEnvFile().then(() => {
        console.log("Did this work? Lets find out.");
    });
    console.log("After calling");
}

app()
