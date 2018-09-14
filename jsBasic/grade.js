const args = process.argv.slice(2);
const grade=parseFloat(args[0]);

if(isNaN(grade)){
    console.log("Wrong Input -.-")
} else if(grade > 100 || grade < 0){
    console.log("Over the range")
} else if(grade >=86 && grade <=100){
    console.log("Grade: A")
} else if(grade >=73 && grade <=85){
    console.log("Grade: B")
} else if(grade >=67 && grade <=72){
    console.log("Grade: C+")
} else if(grade >=60 && grade <=66){
    console.log("Grade: C")
} else if(grade >=50 && grade <=59){
    console.log("Grade: C-")
} else {
    console.log("Grade: You Failed!!!")
}