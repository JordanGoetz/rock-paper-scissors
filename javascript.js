let youWin = " You WIN!"
let youLose = " You LOSE!"
let youTie = "It's a tie"
let roundOutcome = "unknown"
let playerScore = 0
let computerScore = 0


const pickRock = document.querySelector('#choseRock');
pickRock.addEventListener('click', 
        function() {
            playRound("ROCK");
        }
    );

const pickPaper = document.querySelector('#chosePaper');
pickPaper.addEventListener('click', 
        function() {
            playRound("PAPER");
}
);

const pickScissors = document.querySelector('#choseScissors');
pickScissors.addEventListener('click', 
    function() {
        playRound("SCISSORS");
     }
    );

const score = document.querySelector('#score');
const round = document.querySelector('#roundOutcome');
const buttons = document.querySelector('.button')





   

       
     function playRound(playerChoice){
        let computerNumber = Math.floor(Math.random() * 3)
        let computerPick = ""
            if (computerNumber === 0){
                computerPick = "ROCK"
            } else if (computerNumber === 1){
                computerPick = "PAPER"
            } else if (computerNumber === 2){
                computerPick = "SCISSORS"
            }

            if (playerChoice === "ROCK" && computerPick === "ROCK") {
               roundOutcome = "tie"
                round.textContent = "Computer chose " + computerPick + ". " +youTie;
            } 
            
            else if (playerChoice === "ROCK" && computerPick === "PAPER") {
                roundOutcome = "lose"
                round.textContent = "Computer chose " + computerPick + ". " + "Paper beats rock." + youLose;
            } 
            
            else if (playerChoice === "ROCK" && computerPick === "SCISSORS") {
                roundOutcome = "win"
                round.textContent = "Computer chose " + computerPick + ". " + youWin + " Rock beats scissors."
            } 
            
            else if (playerChoice === "PAPER" && computerPick === "ROCK") {
                roundOutcome = "win"
                round.textContent = "Computer chose " + computerPick + ". " + youWin + " Paper beats rock."
            } 
            
            else if (playerChoice === "PAPER" && computerPick === "PAPER") {
                roundOutcome = "tie"
                round.textContent = "Computer chose " + computerPick + ". " +youTie;
            } 
            
            else if (playerChoice === "PAPER" && computerPick === "SCISSORS") {
                roundOutcome = "lose"
                round.textContent = "Computer chose " + computerPick + ". " + "Scissors beats paper." + youLose;
            }
            
            else if (playerChoice === "SCISSORS" && computerPick === "ROCK") {
                roundOutcome = "lose"
                round.textContent = "Computer chose " + computerPick + ". " +"Rock beats paper. " + youLose;
            } 
            
            else if (playerChoice === "SCISSORS" && computerPick === "PAPER") {
                roundOutcome = "win"
                round.textContent = "Computer chose " + computerPick + ". " + youWin + " Scissors beats paper."                 
            } 
            
            else if (playerChoice === "SCISSORS" && computerPick === "SCISSORS") {
                roundOutcome = "tie"
                round.textContent = "Computer chose " + computerPick + ". " +youTie;
            } 
            
            else {
                console.log("Invalid choice")
                playerChoice
            }
            game()
            score.textContent = "Score is " + playerScore + "-" + computerScore
            fullGame()
        };





        function game() {
            if (roundOutcome == "win") {
                playerScore++
                return "Score is " + playerScore + "-" + computerScore
            }else if (roundOutcome == "lose") {
                computerScore++
                return "Score is " + playerScore + "-" + computerScore
            }else if (roundOutcome == "tie") {
                return "Score is " + playerScore + "-" + computerScore
            }
        }

        
       
        function fullGame() {
            if (playerScore ===5) {
                console.log("Game over. You win!")
                round.textContent = "Game over. You win!"
                pickRock.removeEventListener('click')
            }else if (computerScore ===5) {
                console.log("Game over. Computer wins!")
                round.textContent = "Game over. Computer wins!"
                
            }
        }

