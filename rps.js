 let playerScore=0;
 let computerScore=0;
 
 
 /* get computer selection */
function computerPlay(){
    let computerSelection;
    let randomNumber = Math.random();

    if (randomNumber <= (1/3)){
        computerSelection = "rock";
    } 
    else if (randomNumber <= (2/3)){
        computerSelection = "paper";
    }
    else computerSelection = "scissors";
    /*console.log(`computerPlay is ${computerSelection}`);*/
    return computerSelection;
}

/* get player selection */
function playerPlay (){
    let playerSelection = prompt(`type: Rock, Paper, or Scissors?`, '').toLowerCase();
    /*console.log(`playerPlay is ${playerSelection}`);*/
    return playerSelection;
    }

/* compare computer and players's selection */
function comparePlay(playerPlay, computerPlay){
    let result = "";

    switch (true){
        case playerPlay === computerPlay:
            result = `Its a tie. Player chose ${playerPlay} and computer chose ${computerPlay}.`;
            return result;
            break;

        case playerPlay === "rock" && computerPlay === "scissors":
        case playerPlay === "scissors" && computerPlay === "paper":
        case playerPlay === "paper" && computerPlay === "rock":
            result = `Player wins. Player chose ${playerPlay} and computer chose ${computerPlay}.`;
            playerScore++;
            return result;
            break;
            
        case playerPlay === "rock" && computerPlay === "paper":
        case playerPlay === "scissors" && computerPlay === "rock":
        case playerPlay === "paper" && computerPlay === "scissors":
            result = `Computer wins. Player chose ${playerPlay} and computer chose ${computerPlay}.`;
            computerScore++;
            return result;
            break; 
        
        default: playerPlay != null && playerPlay != "" && playerPlay != undefined
            result = "Your choice is not valid. please choose between rock, paper or scissors"
            return result;
            break;
    }
}

/* play one round */
function quickRound() {
    console.log(comparePlay(playerPlay(), computerPlay()));
    
}    

/* play 5 in a row */
    function game(){
        let i = 0;
        for (i=0; i<5; i++){
        quickRound();}
        gameWinner();
    }

/*winning condition */
function gameWinner() {
    if (playerScore > computerScore) {
        console.log(`Game over. Player won ${playerScore} to ${computerScore}`);
    }
    else if(computerScore > playerScore){
        console.log(`Game over. Computer won ${computerScore} to ${playerScore}`);
    }
    else console.log("Its a tie game.");

    playerScore = 0;
    computerScore = 0;
}
