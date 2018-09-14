

const args = process.argv.slice(2);
const a=parseFloat(args[0]);
const b=parseFloat(args[1]);
const c=parseFloat(args[2]);



if(a<=0 || isNaN(a)){
    console.log("Wrong input!")
} else if (b<=0 || isNaN(b)) {
    console.log("Wrong input!")
} else if (c<=0 || isNaN(c)) {
    console.log("Wrong input!")
} else if (a+b<=c || a+c<=b || c+b<=c) {
    console.log("Impossible to form a triangle")
} else {
    const p = (a+b+c)/2;
    const area=(p*(p-a)*(p-b)*(p-c))**0.5;
    const permimeter=a+b+c;
    console.log("Triangle Area = " + area);
    console.log("Permimeter = "+ permimeter);
}
