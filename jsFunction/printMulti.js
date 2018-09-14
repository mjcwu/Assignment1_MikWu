function printMulti(arr){
    if(!arr.length){
        return "No input";
    }
    
    for (let index of arr){
        if(!Array.isArray(index)){
            console.log(index)
        } else {
            for(let index2 of index){
                console.log(index2)
            }
        }
    }
}

console.log(printMulti([[2,3,4],1, ["Hello CodeCore", 1, true]]));