const fs=require("fs")
const path=require("path")
const { escape } = require("querystring")

const [command, ...argv]=process.argv.slice(2)
const fileName=argv[0]

switch(command){
    case "read":{
        if (fs.existsSync(fileName)){
            const content=fs.readFileSync(fileName, "utf-8")
            console.log(content)
        }
        else{
            console.log(`The fie ${fileName} does not exist.`)
        }
    }
        break
    case "create":{
        if (!fs.existsSync(fileName)){
            fs.writeFileSync(fileName, "Hello! You are welcome.")
            console.log(`File ${fileName} created.`)
        }
        else{
            console.log(`File ${fileName} already exist.`)
        }
        break
    }
    case "append":{
        const content=argv[1]
        if (fs.existsSync(fileName)){
            fs.appendFileSync(fileName, content)
            console.log("Successfully appended the content.")
        }
        else{
            console.log("File does not exist.")
        }
        break
    }
    case "delete":{
        if (fs.existsSync(fileName)){
            fs.unlinkSync(fileName)
            console.log(`File ${fileName} deleted successfully.`)
        }
        else{
            console.log(`File ${fileName} does not exist.`)
        }
        break
    }
    case "rename":{
        if (fs.existsSync(fileName)){
            const newFile=argv[1]
            fs.renameSync(fileName, newFile)
            console.log(`File ${fileName} renamed with ${newFile}`)
        }
        else{
            console.log(`File ${fileName} does not exist.`)
        }
        break
    }
    case "list":{
        const files=fs.readdirSync(path.resolve("."))
        files.forEach(item=>{
            console.log(item)
        })
        break
    }
        
    default:
        console.log("Enter valid command!")
}