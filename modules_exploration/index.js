const crypto=require("crypto")
const {v4:uuidv4}=require("uuid")
const fs=require("fs")
const {Readable}=require("stream")
const os=require("os")

function encryptString(){
    const algorithm="aes-256-cbc"
    const key=crypto.randomBytes(32)
    const iv=crypto.randomBytes(16)

    const cipher=crypto.createCipheriv(algorithm, key, iv)
    const message="Hello, Good Morning"
    let encrypted=cipher.update(message, "utf8", "hex")
    encrypted+=cipher.final("hex")

    console.log("Encrypted message-", encrypted)
    console.log("randon uuid-", uuidv4())
}

function readFileComparison(filePath){
    console.time("Stream Read")
    const stream=fs.createReadStream(filePath, {encoding:"utf8"})
    stream.on("data", (chunk)=>{})
    stream.on("end", ()=>{
        console.timeEnd("Stream Read")
    })
    
    console.time("Sync Read")
    const data=fs.readFileSync(filePath, {encoding:"utf-8"})
    console.timeEnd("Sync Read")
}

function getSystemDetails(){
    console.log("System Architecture:", os.arch())
    console.log("Platform:", os.platform())
    console.log("CPU details:", os.cpus())
    console.log("Total Memory:", os.totalmem())
    console.log("Free Memory:", os.freemem())
    console.log("Network interfaces:", os.networkInterfaces())
}

const args=process.argv.slice(2)

if (args[0]=="encrypt"){
    encryptString()
}
else if (args[0]=="readFile"){
    const filePath=args[1]
    if (!filePath){
        console.log("Please provide a filePath for reading.")
    }
    else{
        readFileComparison("./test.txt")
    }
}
else if (args[0]=="systemDetail"){
    getSystemDetails()
}
else{
    console.log("Please provide a valid input: encrypt, readFile<filePath> or systemDetail")
}