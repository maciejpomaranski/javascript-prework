{
    function playGame(playerInput){
        clearMessages()

        function getMoveName(argMoveId){
            if(argMoveId == 1){
            return 'kamień';
            }
            else if(argMoveId == 2){
                return 'papier'
            }
            else if(argMoveId == 3){
                return 'nożyce'
            } 
        }
            const randomNumber = Math.floor(Math.random() * 3 + 1);
                console.log('Wylosowana liczba to: ' + randomNumber);

            const computerMove = getMoveName(randomNumber);
                printMessage('Mój ruch to: ' + computerMove);
            const playerMove = getMoveName(playerInput);
                printMessage('Twój ruch to: ' + playerMove);
                

        function displayResult(argComputerMove, argPlayerMove){  
            if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
                printMessage('Ty wygrywasz!')
            }
            else if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
                printMessage('Remis!');
            }
            else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
                printMessage('Ty przegrywasz!');
            }
            else if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
                printMessage('Remis!');
            }
            else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
                printMessage('Ty przegrywasz!');
            }
            else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
                printMessage('Ty wygrywasz!');
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
            else if( argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch'){
                printMessage('nieznany ruch');
            }
            else if( argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch'){
                printMessage('nieznany ruch');
            }
            else if( argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch'){
                printMessage('nieznany ruch');
            }
        }    
        displayResult (computerMove, playerMove);
}
        document.getElementById("play-rock").addEventListener('click', function(){
            playGame(1);
        });
        document.getElementById("play-paper").addEventListener('click', function(){
            playGame(2);
        });
        document.getElementById("play-scissors").addEventListener('click', function(){
            playGame(3);
        });
}