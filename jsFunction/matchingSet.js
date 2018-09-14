function matchingSet(arr1,arr2){
  
    let arr3=[];
    for (let index of arr1){
       if(arr2.includes(index)){
            arr3.push(index)
       }
    }
    return arr3;
}

console.log(matchingSet([1, 2, 3, 4], [3, 4, 5, 6, 7]))