function mergingSet(arr1,arr2){

    for(let index of arr1){
        if(!arr2.includes(index)){
            arr2.push(index)
        }
    }

    return arr2;
}

console.log(mergingSet([1, 2, 3], [3, 4, 5]))