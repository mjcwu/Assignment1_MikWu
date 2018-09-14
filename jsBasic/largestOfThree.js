const args = process.argv.slice(2);
const a=parseFloat(args[0]);
const b=parseFloat(args[1]);
const c=parseFloat(args[2]);

if(isNaN(a)||isNaN(b)||isNaN(c)){
    console.log("Wrong input!")
} else if( a>b && a>c){
    console.log(a);
} else if(b>c){
    console.log(b)
} else {
    console.log(c)
}