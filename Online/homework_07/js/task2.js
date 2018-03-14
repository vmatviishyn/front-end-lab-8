var result, userNumber, randomNumber, againResult, contResult, againContResult, attempt, currentPrize, totalPrize;
var min=0; max=5, prize=0;
// var d =  ^ 0;
result = confirm("Do you want to play a game?");

randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
if(!result){
    console.log("You did not become a millionaire.");
} else {
	prize = 10;
    currentPrize = 10;
    totalPrize=0;
    attempt=3;
    
    
    while (attempt > 0){   

        userNumber = +prompt("Enter number from 0 to "+ max + "\n"
            + "Attempts left: " + attempt + "\n"
            + "Total prize: " + Math.floor(totalPrize) + "$\n"
            + "Possible prize on current attempt: " + Math.floor(currentPrize) + "$\n","");
         
        if (!Number.isInteger(userNumber) || userNumber < 0) { 
            alert("Enter integer number!");
        }
        else {
            attempt--; 

            if (randomNumber==userNumber){
                totalPrize += currentPrize;
                contResult = confirm("Do you want to continue a game?");
    
                if(!contResult){
                    console.log("Thank you for a game. Your prize is: " + Math.floor(totalPrize) + "$");
                    againContResult = confirm("Do you want to play again?");
                    if(againContResult){
                        attempt = 3;
                        totalPrize = 0;
                        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
                        userNumber = +prompt("Enter number from 0 to "+ max + "\n"
                        + "Attempts left: " + attempt + "\n"
                        + "Total prize: " + Math.floor(totalPrize) + "$\n"
                        + "Possible prize on current attempt: " + Math.floor(currentPrize) + "$\n",""); 
                    } else {
                        break;
                    }
                } else {
                    attempt = 3;
                    max = max*2;
                    prize = prize * 3;
                    currentPrize = prize;
                    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
                } 
            } else if (randomNumber!=userNumber) {
                currentPrize = currentPrize/2; 
            }    
        }
    } 
}

if (attempt==0){
    console.log("Thank you for a game. Your prize is: " + Math.floor(totalPrize) + "$");
    againResult = confirm("Do you want to play again?");
    if(againResult){
        location.reload();
    }
}


