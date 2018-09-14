var d = new Date();

console.log(d)

console.log(d.getDate())
console.log(d.getDay())
console.log(d.getFullYear())
console.log(d.getFullYear()+1)
console.log(d.setFullYear())

let yrcount = 1;
let yrhappen = "";

while (yrcount<=36){
    if(d.getDate()===1 && d.getDay()===1 && d.getMonth() === 1){
        yrhappen = yrhappen + " " + d.getFullYear;
    } 
    yrcount +=1;
    // getFullYear
}

console.log(yrhappen);