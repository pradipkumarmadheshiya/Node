const crypto=require("crypto")
const argv=process.argv.slice(2)
const command=argv[0]

if (argv.length==0){
    console.log('Please give valid input')
    process.exit(1)
}

function solve(argv){
    switch(command){
        case "add":
            if (argv.length<3){
                console.log("Please give valid input")
            }
            else{
                const total=parseFloat(argv[1])+(parseFloat(argv[2]))
                console.log(total)
            }
            break
        case "sub":
            if (argv.length<3){
                console.log("Please give valid input")
            }
            else{
                const total=parseFloat(argv[1])-(parseFloat(argv[2]))
                console.log(total)
            }
            break
        case "mult":
            if (argv.length<3){
                console.log("Please give valid input")
            }
            else{
                const total=parseFloat(argv[1])*(parseFloat(argv[2]))
                console.log(total)
            }
            break
        case "div":
            if (argv.length<3){
                console.log("Please give valid input")
            }
            else if (argv[2]==0){
                console.log("Division by 0 is not allowed")
            }
            else{
                const total=parseFloat(argv[1])/(parseFloat(argv[2]))
                console.log(total)
            }
            break

        case "sin":
            if (argv.length<2){
                console.log("Please provide valid input")
            }
            else{
                console.log(Math.sin(parseFloat(argv[1])))
            }
            break
        case "cos":
            if (argv.length<2){
                console.log("Please provide valid input")
            }
            else{
                console.log(Math.cos(parseFloat(argv[1])))
            }
            break
        case "tan":
            if (argv.length<2){
                console.log("Please provide valid input")
            }
            else{
                console.log(Math.tan(parseFloat(argv[1])))
            }
            break

        case "random":
            if (argv.length<2){
                console.log("Please provide valid input")
            }
            else{
                const len=parseInt(argv[1], 10)
                if (isNaN(len || len<=0)){
                    console.log("Please povide a valid positive integer for length")
                }
                else{
                    const randomBytes=crypto.randomBytes(len).toString("binary")
                    console.log(randomBytes)
                }
            }
            break
        default:
            console.log("Invalid command, supported commands are: add, sub, mult, div, sin, cos, tan, random.")
    }
}
solve(argv)