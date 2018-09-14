// 'process.argv' returns an array where the first value
// where the first value is the full path to your Node program 
// and the second value is the full path to script that 
// was run. all other values are arguments that you gave
// the script


const args = process.argv.slice(2);

console.log(process.argv);

const firstArg = args[0];
const secondArg = args[1];

console.log("first argument:", firstArg);
console.log("second argument:", secondArg);
console.log("third argument:", args[2]);

// when using a conditional or anything expects 
// a boolean, you do not need to actually provide 
// a boolean. javascript will early convert
// to one following certain rules. this is called
// "type coericon"

// to verify how it converts a value to a boolean,
// use two nots (!!) on the value

// values that convert to 'true' are considered
// "truthy" and values that convert to 'false'
// are considered "falsy"