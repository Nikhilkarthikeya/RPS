let userscore = 0;
let compscore = 0;
let userscorepara = document.querySelector("#user-score");
let compscorepara = document.querySelector("#comp-score");
let userchoice = document.querySelector(".choices");
let choices = document.querySelectorAll(".choice");
let msg = document.getElementById("msg");
let reset = document.getElementById("resetbtn");


let userchoices=['rock', 'paper', 'scissors'];
function gencompchoice(){
    return userchoices[Math.floor(Math.random() *3)];
}

const drawgame =()=>{
    // console.log("match was draw");
    msg.innerText = "It's a draw!!"
    msg.style.backgroundColor = "gold";
}

const showwinner=(userwin, userchoice, compchoice)=>{
    if(userwin){
        // console.log("user is the winner");
        msg.innerText = `You win! ${userchoice} beats ${compchoice}`;
        userscore++;
        userscorepara.innerText = userscore;
        msg.style.backgroundColor= "green";
    }else{
        // console.log("computer is the winner");
        msg.innerText = `You lost! ${compchoice} beats ${userchoice}`;
        compscore++;
        compscorepara.innerText = compscore;
        msg.style.backgroundColor = "red";
    }
}


const playgame = (userchoice)=>{
    // console.log("user choice =", userchoice);
    const compchoice = gencompchoice();
    // console.log("comp choice=", compchoice);

    if (userchoice === compchoice){
        drawgame();
    }else{
        let userwin = true;
        if(userchoice === "rock"){  //compchoice = paper, scissors
            userwin = compchoice === "paper" ? false : true;
        } else if(userchoice === "paper"){ //computer-choice = rock, scissors
            userwin = compchoice === "scissors" ? false : true;
        } else {
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin, userchoice, compchoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});

reset.addEventListener("click", ()=>{
    userscore=0;
    compscore=0;
    userscorepara.innerText = userscore;
    compscorepara.innerText = compscore;
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "black";
})