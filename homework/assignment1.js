function drawLine (numLine){
        if(isNaN(numLine)){
        return "NOT A NUMBER!"
    }

    let drawLine="";
    
    for(let i=0; i<numLine;i+=1){
        drawLine = drawLine + ("_");
    }

    return drawLine;
}

console.log(drawLine("A"));