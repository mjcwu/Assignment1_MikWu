
// to create a function, use the 'function keyword
// followed by a name, then a () with 
// arguments declared inside and {} for the body of 
// the function where we write code to be executed later.



function insult(name){
    const randNum = Math.floor(Math.randum()*3);

    if(randNum===0){
        return '${name}, you dumbass';
    } else if (randNum===1){
        return '${name}, you jerk';
    } else {
        return '${name}, you doofus';
    }
}