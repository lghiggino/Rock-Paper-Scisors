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
    else computerSelection = "scisors";
    console.log(`computerPlay é ${computerSelection}`);
    return computerSelection;
}

/* get player selection */
function playerPlay (){
    let playerSelection = prompt(`Rock, Paper, or Scissors?`, '').toLowerCase();
console.log(`playerPlay é ${playerSelection}`);
return playerSelection;
}

/* compare computer and players's selection */
function comparePlay(playerPlay, computerPlay){
    let result = "";

    switch (true){
        case playerPlay === computerPlay:
            result = "Its a tie";
            return result;
            break;

        case playerPlay === "rock" && computerPlay === "scisors":
        case playerPlay === "scisors" && computerPlay === "paper":
        case playerPlay === "paper" && computerPlay === "rock":
            result = `Player wins. Player chose ${playerPlay} and computer chose ${computerPlay}. Player wins.`
            return result;
            break;
        case playerPlay === "rock" && computerPlay === "paper":
        case playerPlay === "scisors" && computerPlay === "rock":
        case playerPlay === "paper" && computerPlay === "scisors":
            result = `Computer wins. Player chose ${playerPlay} and computer chose ${computerPlay}. `
            return result;
            break; 
        
        default: playerPlay != null && playerPlay != "" && playerPlay != undefined
            result = "Your choice is not valid. please choose between rock, paper or scisors"
            return result;
            break;
    }
}


/* play one round */
function quickRound() {
    console.log(comparePlay(playerPlay(), computerPlay()));
}    
