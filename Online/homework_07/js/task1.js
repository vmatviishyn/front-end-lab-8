var N = +prompt("Enter natural number from 0 to 20","7");
var i=0, j=0, space="", brackets="";

if (N<0 || N>20){
    console.error("Incorect!");
} else { 
    while (i <= N) {
        space = "";
        brackets = "";
        for (j = 0; j < N - i; j++) {
            space += "   ";
        }
        for (j = 0; j < 2 * i + 1; j++) {
            brackets += "[~]";
        }
        console.log(space + brackets);
        i++;
    }
}




