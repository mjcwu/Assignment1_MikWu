

function areValuesArrays(arr){
    if(!arr.length){ 
        // 0 => false
        // !0 => true
        return false;
    }
    for (let val of arr){
        console.log(val)
        if(!Array.isArray(val)){
            return false;
        }
    }
    return true;
}

console.log(areValuesArrays([[1],[2],[4,5]]))
console.log(areValuesArrays([1,[2], [4,5]]))
console.log(areValuesArrays(['true','false']))
console.log(areValuesArrays([]))