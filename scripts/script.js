var selections = ['rock', 'paper', 'scissors'];
var computerSelection = "";
var playerSelection = prompt();

function computerPlay(){
    selection = Math.floor(Math.random() * selections.length);
    computerSelection = selections [selection]
    return computerSelection
}

computerPlay();

function playRound(playerSelection, computerSelection){
    if (playerSelection == 'rock' && computerSelection == 'rock'){
        return 'draw'
    }
    else if(playerSelection == 'rock' && computerSelection == 'paper'){
        return 'paper wins'
    }
    else if(playerSelection == 'rock' && computerSelection == 'scissors'){
        return 'rock wins'
    }
    else if(playerSelection == 'paper' && computerSelection == 'rock'){
        return 'paper wins'
    }
    else if(playerSelection == 'paper' && computerSelection == 'paper'){
        return 'draw'
    }
    else if(playerSelection == 'paper' && computerSelection == 'scissors'){
        return 'scissors wins'
    }
    else if(playerSelection == 'scissors' && computerSelection == 'rock'){
        return 'rock wins'
    }
    else if(playerSelection == 'scissors' && computerSelection == 'paper'){
        return 'scissors wins'
    }
    else if(playerSelection == 'scissors' && computerSelection == 'scissors'){
        return 'draw'
    }
    else{
        return 'Please enter either rock, paper or scissors.'
    }
}

function game(){
    for (let i=0; i<5; i++){
        playRound();
    }
}

console.log(computerSelection);
console.log(playRound(computerSelection, playerSelection));