function drawLine (numLine){
    //     if(isNaN(numLine)){
    //     return "NOT A NUMBER!"
    // }

    let drawLine="";
    
    for(let i=0; i<numLine;i+=1){
        drawLine = drawLine + ("━");
    }
    return drawLine;
}
//--------------TOP BORDER---------------------
function drawTopBorder(numTopBorder){
    // if(isNaN(numTopBorder)){
    //     return "NOT A NUMBER!"
    // }
    let drawTopBorder1="┏"+drawLine(numTopBorder)+"┓";
    return drawTopBorder1;
}
//--------------MIDDLE BORDER---------------------
function drawMiddleBorder(numMiddleBorder){
    // if(isNaN(numMiddleBorder)){
    //     return "NOT A NUMBER!"
    // }
    let drawMidBorder="┣"+drawLine(numMiddleBorder)+"┫";
    return drawMidBorder;
}
//--------------BOTTOM BORDER---------------------
function drawBottomBorder(numBottomBorder){
    // if(isNaN(numBottomBorder)){
    //     return "NOT A NUMBER!"
    // }
    let drawBotBorder="┗"+drawLine(numBottomBorder)+"┛";
    return drawBotBorder;
}

//--------------DRAW BARS---------------------
function drawBars(userString, maxStrNum){
    // if(typeof userString!= "string"){
    //     return "NOT A STRING!"
    // }
    let drawBarsAround="┃"+userString;
    
        if(userString.length===maxStrNum){
            drawBarsAround=drawBarsAround+"┃";
            return drawBarsAround;
        } else {
            for(let m=userString.length;m<maxStrNum;m+=1){
            drawBarsAround = drawBarsAround + " ";
            }
        }
    drawBarsAround = drawBarsAround + "┃";
    return drawBarsAround;
}
//--------------Box It---------------------
function boxIt(userArray){
    let maxStr=0;
    for(let k=0;k<userArray.length;k+=1){
        for(let index of userArray){
            if(userArray[k].length<index.length){
                maxStr=index.length;
            }
        }
    }
    console.log("max="+maxStr)
    let modifiedString = drawTopBorder(maxStr); 
    if(userArray.length===1){
        modifiedString = modifiedString + "\n"+drawBars(userArray[0]);
    } else {
        for(let j=0; j < userArray.length; j+=1){
            if(j===(userArray.length-1)){
                modifiedString = modifiedString + "\n"+drawBars(userArray[j],maxStr);
            } else {
                modifiedString = modifiedString + "\n"+drawBars(userArray[j],maxStr)+ "\n"+ drawMiddleBorder(maxStr);
            } 
        }
    }
    modifiedString = modifiedString+"\n"+drawBottomBorder(maxStr);
    return modifiedString; 
}
console.log(boxIt(["I love you Catherine Wong","Iron man","Hulk","Black Widow","Drax the Destoryer"]));
