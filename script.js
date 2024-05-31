let userScore= 0;
let compscore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara =document.querySelector("#user-score");
const compScorePara =document.querySelector("#comp-score");

const gencomchoice =()=>{
    // rock ,paper ,scissor
    const option = ["rock" ,"paper" ,"scissor"];
    const randidx = Math.floor(Math.random()*3);
    return option[randidx];

}

const drawGame =()=>{
    console.log("game is draw");
    msg.innerText="Game Draw!";
    msg.style.backgroundColor="#081b31"
    msg.style.color="white"
}

const showWinner =(userwin ,userchoice ,compchoice)=>{
    if(userwin){
        // console.log("you win!");
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green"
        msg.style.color="white"
        
    }
    else{
        compscore++;
        compScorePara.innerText=compscore;
        // console.log("you lost!");
        msg.innerText=`You loose! ${compchoice} Your beats ${userchoice}`;
        msg.style.backgroundColor="red"
        msg.style.color="black"
        
        
    }
}


const playgame =(userchoice)=>{
    console.log("user choice ",userchoice);

    // generate comp choice-->modular

    const compchoice =gencomchoice();
    console.log("comp choice ",compchoice);

    if(userchoice===compchoice){
        // draw game
        drawGame();
    }
    else{
        let userwin =true;
        if(userchoice==="rock"){
            userwin = compchoice==="paper"?false:true;
        }
        else if(userchoice=="paper"){
            userwin = compchoice==="scissor"?false:true;
        }
        else{
            userwin = compchoice==="rock"?false:true;
        }
        showWinner(userwin ,userchoice ,compchoice);
    }
}


choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice =choice.getAttribute("id")
        // console.log("choice was clicked!" ,userchoice)

        playgame(userchoice);

    });
});