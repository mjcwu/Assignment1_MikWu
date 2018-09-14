function findDuplicates(arr1){
    let arrFinal=[]
    for(let i=0; i<arr1.length; i+=1){
        if(arr1.indexOf(arr1[i],i+1)>=0 && arr1.includes(arr1[i])){
            arrFinal.push(arr1[i])
        }
    }
    return arrFinal;
}


console.log(findDuplicates([1, 1, 3, 4, 5, 6, 7, 8, 9, 9]))
console.log(findDuplicates(['Bob', 'bob', 'Rob', 'Rob', 1, 2, 3, 4, 4]))