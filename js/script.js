function getMoveName(randomNumber) {
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);
    
    if(randomNumber == 1){
        computerMove = 'kamień';
    }
    else if(randomNumber == 2){
        computerMove = 'papier';
        }
    else(randomNumber == 3){
    computerMove = 'nożyce';
    }
    
    printMessage('Mój ruch to: ' + computerMove);

    let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
        
    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);

    if(playerInput == '1'){
    playerMove = 'kamień';
    } 
    else if(playerInput == '2'){
        playerMove = 'papier';
    }
    else if(playerInput == '3'){
        playerMove = 'nożyce';
    }
    else(playerMove > 3){
        playerMove = 'nieznany ruch';
    }

    printMessage('Twój ruch to: ' + playerMove);
    
}

if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }
else if( computerMove == 'papier' && playerMove == 'papier'){
printMessage('Remis!');
}
else if( computerMove == 'nożyce' && playerMove == 'papier'){
printMessage('Ty przegrywasz!');
}
else if( computerMove == 'nożyce' && playerMove == 'kamiień'){
printMessage('Ty wygrywasz!');
} 
else if( computerMove == 'papier' && playerMove == 'kamiień'){
printMessage('Ty przegrywasz!');
}
else if( computerMove == 'kamień' && playerMove == 'kamiień'){
printMessage('Remis!');   
}
else if( computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Ty przegrywasz!');   
}
else if( computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');   
}
else if( computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Remis!');   
}
else(playerMove == 'nieznany ruch'){
    printMessage('nieznany ruch!');
}   
    