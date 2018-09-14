const args = process.argv.slice(2);
const passWord = args[0]

if(passWord === undefined){
    console.log("Password is required")
} else if(passWord==="opensesame"){
    console.log("The secret number \"714\"");
}   else {
    console.log("Fail to login")
}