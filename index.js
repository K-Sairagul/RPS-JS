// it was in top it is due to it is like database it can be accesed so i t was in the top
const Totalscore = { ComputerScore: 0, PlayerScore: 0 }

//1.  In this function we are getting first computer choice by using mathfloor and math random and the index number starts from 0

function getComputerChoice() {
    const SelectChoice = ["Rock", "Paper", "Scissors"]
    const ComputerChoice = SelectChoice[Math.floor(Math.random() * 3)]
    return ComputerChoice

}

// fixing the game rules for playerchoice and computer choice for playing the game
function getResult(playerChoice, ComputerChoice) {
    let score;
    if (playerChoice == ComputerChoice) {
        score = 0
    }
    else if (playerChoice == "Rock" && ComputerChoice == "Scissors") {
        score = 1
    }
    else if (playerChoice == "Paper" && ComputerChoice == "Rock") {
        score = 1
    }
    else if (playerChoice == "Scissors" && ComputerChoice == "Paper") {
        score = 1
    }
    else {
        score = -1
    }
    return score;

}

function showResult (score, playerChoice, ComputerChoice) {
    const resultDiv = document.getElementById("result")
    const handsDiv = document.getElementById("hands")
    const playerScoreDiv = document.getElementById("player-score")
    const computerchoice= document.getElementById("computer-score")
   

    if (score == -1) {
        resultDiv.innerText = "you lose"

    }
    else if (score == 0) {
        resultDiv.innerText = "draw"

    }
    else {
        resultDiv.innerText = "you win"

    }

    // it is getting value from the playerchoice and computerchoice like rock vs paper
    handsDiv.innerText = `👨${playerChoice}  vs 🤖${ComputerChoice}`
    playerScoreDiv.innerText=`your score is:${Totalscore["PlayerScore"]}`
    computerchoice.innerText=`computer score is:${Totalscore["ComputerScore"]}`
  
}


// This click is for player choice
function onClickRPS(playerChoice) {
    //console.log({playerChoice})
    //getting the computer choice for random
    const ComputerChoice = getComputerChoice()

   
    //console.log({ComputerChoice})
    //getting the result from getresult function
    const PlayerScore = getResult(playerChoice,ComputerChoice)
    const ComputerScore=-PlayerScore

    // we are getting the player score only so always the computer score remains zero need to code for computer score to get update
    Totalscore['PlayerScore'] += PlayerScore
    Totalscore['ComputerScore']+=ComputerScore

    //console.log({score})
    //console.log(Totalscore)

    // for getting score and sending to the show result area to print the result
    //finally calling the show result function
    showResult(PlayerScore, playerChoice, ComputerChoice)
}




function endGame(Totalscore) {
    
Totalscore["PlayerScore"] = 0
Totalscore['ComputerScore'] =0

    const resultDiv = document.getElementById("result")
    const handsDiv = document.getElementById("hands")
    const playerScoreDiv = document.getElementById("player-score")
    const computerchoice= document.getElementById("computer-score")
    

    resultDiv.innerText = ""
    handsDiv.innerText = ""
    playerScoreDiv.innerText = ""
    computerchoice.innerText=""
}



const AllRPSButtons = document.querySelectorAll(".rpsButton")


AllRPSButtons.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value)

})

const endButton = document.getElementById("endGameButton")
endButton.onclick = () => endGame(Totalscore)



