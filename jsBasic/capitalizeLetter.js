const args = process.argv.slice(2);

// let word=args[0];
// let result="";

// for(let i=0; i<word.length; i+=1){
//     if(i % 2===0){
//         result += word[i].toLowerCase();
//     } else {
//         result += word[i].toUpperCase();
//     }
// }
// console.log(result);

let word="";
let result="";
for(let i=0; i<args.length; i+=1){
    word+= args[i];
    word+= " ";
}

for(let i=0; i<word.length; i+=1){
    if(i % 2===0){
        result += word[i].toLowerCase();
    } else {
        result += word[i].toUpperCase();
    }
}
console.log(result);