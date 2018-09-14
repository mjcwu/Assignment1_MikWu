const args = process.argv.slice(2);
const numDice=args[0];
const numFace=args[1];
let total=0;
let avg=0;
let rolled;

for (let i=1; i<=numDice; i+=1){
    rolled = Math.round(Math.random()*numFace);
    console.log("Rolled #1: "+rolled);
    total= total+rolled;
}
avg = total / numDice;
console.log("Total: "+total)
console.log("Average: "+ avg)
