let userscore = 0;
let drawscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#computer-score");
const drawScorepara = document.querySelector("#draw-score");

const gencompChoice = () =>{
    let options =["rock", "paper","scissor"];
    const randomindex = Math.floor(Math.random()*3);
    return options[randomindex];
};

const drawGame= ()=>{
    drawscore++;
    drawScorepara.innerText = drawscore;
    msg.innerText="Game was draw";
    msg.style.backgroundColor="blue";
}

const showWinner= (userwin ,userChoice, compChoice)=>{
    if(userwin){
        userscore++;
        userScorepara.innerText = userscore;
        msg.innerText=`You Win! , The ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compScorepara.innerText = compscore;
        msg.innerText=`Computer Win The ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const playgame= (userChoice)=>{
    //generate computer choice
    const compChoice= gencompChoice();

    if(userChoice == compChoice){
        drawGame();
    }else{
        let userwin=true;
        if(userChoice == "rock"){
            userwin= compChoice=== "paper" ? false :true;
        } 
        else if(userChoice == "paper"){
            userwin= compChoice=== "scissor" ? false :true;   
        }
        else{
            userwin= compChoice=== "rock" ? false :true;
        }
        showWinner(userwin ,userChoice, compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click" , ()=>{
        const userChoice= choice.getAttribute("id");
        playgame(userChoice);
    });
});