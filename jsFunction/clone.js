function clone(objB){
    // let objA = {a:1,b:2};
    // let objC = objA;

    // if(objC===objB){
    //     return true;
    // } else {
    //     return false;
    // }

    let result = {} 
    for (let key in objB){ /*let....in --> object*/
        result[key] = objB[key];
    }
    return result;
}
// in different memory location, so differ object
console.log({a:1,b:2} === clone({a:1,b:2}))