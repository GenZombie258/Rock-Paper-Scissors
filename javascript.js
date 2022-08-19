function playRound(playerSelection, computerSeclection) {
// Choice Rock

// choice Paper
// choice scissor 
}

const getComupterChoice = () => {
    let randomNumber = Math.floor(Math.random()*3)
    switch (randomNumber) {
    case 0:
        return "rock"
        break
    case 1:
        return "paper"
        break
    case 2:
        return "scissor"
        break
    }
    }

const playerSelection = "rock";
const computerSeclection = getComupterChoice();
console.log(playRound(playerSelection, computerSeclection));