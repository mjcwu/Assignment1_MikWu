function mergingObj(objA, objB){
    let result = {}
    for (let key of Object.keys(objA)){
        console.log(key)
        result[key] = objA[key];
    }
    for (let key of Object.keys(objB)){
        result[key] = objB[key];
    }
    return result;
}

console.log(mergingObj({a: 1, b: 2}, {c: 3, d: 4}))

