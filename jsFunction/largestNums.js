function largestNums(arr){
    if(!arr.length){
        return "No input";
    }
    let max = arr[0];
    for (let val of arr){
        if(max <= val){
        max = val;
        }
    }
    return max;
}

console.log(largestNums([-1,-1,-1,-2,-1,0]));