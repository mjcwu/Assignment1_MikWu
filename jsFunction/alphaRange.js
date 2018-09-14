function alphaRange(argu1,argu2,step){
    let alpha=[`a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`,`i`,`j`,`k`,`l`,`m`,`n`,`o`,`p`,`q`,`r`,`s`,`t`,`u`,`v`,`w`,`x`,`y`,`z`];
    let start=alpha.indexOf(argu1);
    let end=alpha.indexOf(argu2);
    let finalResult=[];
    //let reverseArr=[];
    if(end>start){
        for(let j=start; j<=end; j+=step){
            finalResult.push(alpha[j]);
        }
        return finalResult;
    } else { 
        for(let j=start; j>=end; j-=step){
        finalResult.push(alpha[j]);
    }
    return finalResult;
    }
    //reverseArr=finalResult.reverse();
    //return reverseArr;
}

console.log(alphaRange('a', 'k', 3))
console.log(alphaRange('z', 't', 2))