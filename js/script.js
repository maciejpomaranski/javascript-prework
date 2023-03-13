function getMoveName(randomNumber) {
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);
    
    if(randomNumber == 1){
        computerMove = 'kamień';
        return 'kamień'
    } 
    else if(randomNumber == 2){
        computerMove = 'papier';
        return  'papier'
    }
    else(randomNumber == 3){
    computerMove = 'nożyce';
    return 'nożyce'
    }
}    
    printMessage('Mój ruch to: ' + computerMove);

    function getMoveName(playerInput) {
    let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
        
    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);

    if(playerInput == '1'){
    playerMove = 'kamień';
    return kamień
    } 
    else if(playerInput == '2'){
        playerMove = 'papier';
        return papier
    }
    else if(playerInput == '3'){
        playerMove = 'nożyce'
        return nozyce;
    }
    else(playerMove > 3){
        playerMove = 'nieznany ruch';
        printMessage 'nieznany ruch'
        return 'nieznany ruch'
    }    
}
    printMessage('Twój ruch to: ' + playerMove);
    
function displayResult(argComputerMove, argPlayerMove) {
    let argComputerMove = getMoveName(randomNumber);
    let argPlayerMove = getMoveName(playerInput);

    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
    }
    else if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
    printMessage('Remis!');
    }
    else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
    printMessage('Ty przegrywasz!');
    }
    else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamiień'){
    printMessage('Ty wygrywasz!');
    } 
    else if( argComputerMove == 'papier' && argPlayerMove == 'kamiień'){
    printMessage('Ty przegrywasz!');
    }
    else if( argComputerMove == 'kamień' && argPlayerMove == 'kamiień'){
    printMessage('Remis!');   
    }
    else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        printMessage('Ty przegrywasz!');   
    }
    else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');   
    }
    else if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
        printMessage('Remis!');   
    }
    else(argPlayerMove == 'nieznany ruch'){
        printMessage('nieznany ruch!');
    } 
}