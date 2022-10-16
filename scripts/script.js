function computerPlay(){
    let selections = ['rock', 'paper', 'scissors'];
    let selection = Math.floor(Math.random() * selections.length);
    computerSelection = selections [selection]
    return computerSelection
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return 'draw';
    }
    else if(playerSelection == 'rock' && computerSelection == 'paper'){
        return 'You Lose! Paper beats Rock';
    }
    else if(playerSelection == 'rock' && computerSelection == 'scissors'){
        return 'You Win! Rock beats Scissors';
    }
    else if(playerSelection == 'paper' && computerSelection == 'rock'){
        return 'You Win! Paper beats Rock';
    }
    else if(playerSelection == 'paper' && computerSelection == 'scissors'){
        return 'You Lose! Scissors beats Paper';
    }
    else if(playerSelection == 'scissors' && computerSelection == 'rock'){
        return 'You Lose! Rock beats Scissors';
    }
    else if(playerSelection == 'scissors' && computerSelection == 'paper'){
        return 'You Win! Scissors beats Paper';
    }
    else{
        return 'Please enter either rock, paper or scissors.';
    }
}

function play(){
    for (let i = 0; i < 5; i++){
        playerSelection = window.prompt().toLowerCase();
        computerSelection = computerPlay();
        console.log("you selected", playerSelection);
        console.log(computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
}

play();