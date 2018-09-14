const args = process.argv.slice(2);
const mood = args[0];

// an if-block is a statement instead expression.
// a statement is similar to an expression, but it
// never evaluates to a value. this means that you 
// can't assign it to a variable for instance



if (mood==="happy"){
    console.log("yay!");
}   else if (mood === "angry") {
    console.log("about what?!");
}   else {
    console.log("ok.");
}