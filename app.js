let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was draw. Play again!";
    msg.style.backgroundColor = "#081b31";
};

const decideFinalWinner = (userScore, compScore) => {
    if (userScore > compScore) {
        msg.innerText = "YOU BEAT COMPUTER! PLAY AGAIN!";
        msg.style.backgroundColor = "green";
    } else {
        msg.innerText = "COMPUTER BEATS YOU! PLAY AGAIN!";
        msg.style.backgroundColor = "red";
    }
    resetGame();
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        if (userScore < 10) {
            userScorePara.innerText = userScore;
            msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor = "green";
        } else {
            decideFinalWinner(userScore, compScore);
        }
    } else {
        compScore++;
        if (compScore < 10) {
            compScorePara.innerText = compScore;
            msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
            msg.style.backgroundColor = "red";
        } else {
            decideFinalWinner(userScore, compScore);
        }
    }
};

const resetGame = () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
};

const playGame = (userChoice) => {
    //Generate computer choice
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissors, paper
            userWin === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
