function zip(arr1, arr2){
    let arrFinal=[]
    if(arr1.length!=arr2.length){
        return "Null";
    } else {
        for(let i=0; i < arr1.length; i+=1){
            arrFinal[i] = [arr1[i],arr2[i]]
        }
        return arrFinal;
    }
}
console.log(zip([1, 2, 3], [3, 4, 5]))