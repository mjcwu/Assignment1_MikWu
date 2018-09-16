function drawLine (numLine){
        if(isNaN(numLine)){
        return "NOT A NUMBER!"
    }

    let drawLine="";
    
    for(let i=0; i<numLine;i+=1){
        drawLine = drawLine + ("━");
    }
    return drawLine;
}
//--------------TOP BORDER---------------------
function drawTopBorder(numTopBorder){
    if(isNaN(numTopBorder)){
        return "NOT A NUMBER!"
    }
    let drawTopBorder1="┏"+drawLine(numTopBorder)+"┓";
    return drawTopBorder1;
}
//--------------MIDDLE BORDER---------------------
function drawMiddleBorder(numMiddleBorder){
    if(isNaN(numMiddleBorder)){
        return "NOT A NUMBER!"
    }
    let drawMidBorder="┣"+drawLine(numMiddleBorder)+"┫";
    return drawMidBorder;
}
//--------------BOTTOM BORDER---------------------
function drawBottomBorder(numBottomBorder){
    if(isNaN(numBottomBorder)){
        return "NOT A NUMBER!"
    }
    let drawBotBorder="┗"+drawLine(numBottomBorder)+"┛";
    return drawBotBorder;
}


console.log(drawTopBorder(10));
console.log(drawMiddleBorder(10));
console.log(drawBottomBorder(10));