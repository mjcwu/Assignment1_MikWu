const args = process.argv.slice(2);
const a=parseInt(args[0]);
const b=parseInt(args[1]);

let count =1;

while(count<=100){
    if((count%a)===0){
        console.log("fizz")
        count +=1;
    } else if((count%b)===0){
        console.log("fizzbuzz")
        count +=1;
    } else {
        console.log(count)
        count +=1;
    }
}
