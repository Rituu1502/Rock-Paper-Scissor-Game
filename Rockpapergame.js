let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let userScore=document.querySelector("#userscore");
let compScore=document.querySelector("#compscore");

const drawgame=()=>{
    msg.innerText="Game Draw.. Play Again!!";
    msg.style.backgroundColor="black";
}

const showWinner=(userWin,userchoice,compchoice)=>{
    if(userWin){
        userscore++;
        userScore.innerText=userscore;
        msg.innerText=`You Win!! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compScore.innerText=compscore;
        msg.innerText=`You Lose!! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}


const gencompchoice=() =>{
    let options=["rock","paper","scissor"];
    const randomindex=Math.floor(Math.random()*3);
    return options[randomindex];
}

const playgame=(userchoice) =>{
    const compchoice=gencompchoice();    
    if(userchoice==compchoice){
        drawgame();
    }
    else{
        let userWin=true;
        if (userchoice==="rock"){
            userWin=compchoice==="paper"? false:true;
        }
        else if(userchoice=="paper"){
            userWin=compchoice==="scissor"? false:true;

        }
        else{
            userWin=compchoice==="rock"? false:true;
        }
        showWinner(userWin,userchoice,compchoice);
    }
}



choices.forEach((choice)=> {
    // console.log(choice);
    choice.addEventListener("click",() => {
            const userchoice=choice.getAttribute("id");
            playgame(userchoice);
    })

    });