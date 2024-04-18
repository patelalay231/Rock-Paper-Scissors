let choices = document.querySelectorAll(".choiceImage");
let msg = document.querySelector(".msg");
let youWonCnt = 0;
let cmpWonCnt = 0;

let yourScore = document.querySelector(".yourScore");
let cmpScore = document.querySelector(".cmpScore");

function getRandomNumber() {
    const randomDecimal = Math.random();

    const randomNumber = Math.floor(randomDecimal * 3);

    return randomNumber;
  };

function onClick(event) {
    let choice = event.target;
    for(let choice of choices){
        choice.style.border = "none";
    }
    choice.style.border = "1vmin solid #231835";
    choiceDisabled();
    checkWinner();
    choiceEnabled();
}

choices.forEach((choice) => {
    choice.addEventListener("click",onClick);
});

const choiceDisabled=()=>{
    for(let choice of choices){
        choice.style.pointerEvents = "none";
        choice.disabled=true;
    }
};

const choiceEnabled=()=>{
    for(let choice of choices){
        choice.style.pointerEvents = "auto";
        choice.disabled=false;
    }
};

const checkWinner = () =>{
        let yourChoice;
        let cmpChoice = getRandomNumber();
        let winner;
        let rock = choices[0].style.borderStyle;
        let paper = choices[1].style.borderStyle;
        let scissor = choices[2].style.borderStyle;
        if(rock != ""){
            yourChoice = 0;
        }
        else if(paper != ""){
            yourChoice = 1;
        }
        else{
            yourChoice = 2;
        }
        if((yourChoice == 0 && cmpChoice == 2) || (yourChoice == 1 && cmpChoice == 0) || (yourChoice == 2 && cmpChoice == 1)){
            winner = 0;
        }
        else if(yourChoice == cmpChoice){
            winner = -1;
        }
        else{
            winner = 1;
        }
        showWinner(winner);

};

const showWinner = (winner) => {
    if(winner == 0){
        msg.innerText = "Congratulations! You Won ;)";
        youWonCnt++;
        yourScore.innerText = youWonCnt;
    }
    else if(winner == 1){
        msg.innerText = "Better Luck Next Time! :(";
        cmpWonCnt++;
        cmpScore.innerText = cmpWonCnt;
    }
    else{
        msg.innerText = "Tie! :/"
    }
    if(youWonCnt > cmpWonCnt){
        yourScore.style.color = "green";
        cmpScore.style.color = "#231835";
    }
    else if(youWonCnt < cmpWonCnt){
        yourScore.style.color = "#231835";
        cmpScore.style.color = "green";
    }
    else{
        yourScore.style.color = "darkred";
        cmpScore.style.color = "darkred";
    }
};