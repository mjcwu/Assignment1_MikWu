function sum(numbers){
    let total=0;
    for (let i =0; i<numbers.length; i+=1){
        if(!isNaN(numbers[i])){
            total = total + numbers[i];
        }
    }
    return total;
}

console.log("----TESTING SUM----");
console.log(sum([1,2,3,4,5]));
console.log(sum([1,2,3,"a",5]));