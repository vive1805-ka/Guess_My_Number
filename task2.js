let againbtn=document.querySelector(".again");
let number=document.querySelector(".number");
let guess=document.querySelector(".guess");
let checkbtn=document.querySelector(".check");
let msg=document.querySelector(".message");
let score=document.querySelector(".score");
let highScore=document.querySelector(".highscore");

let randomval=Math.trunc(Math.random()*50)+1;
let curScore=50;
console.log(randomval);

checkbtn.addEventListener("click",() =>{
    //1.The input val
    let val=Number(guess.value);
    console.log(val,typeof val);

    //2.we have to check whether there is some value in input box or not

    if(!val){
        //2.1 in message show no value entered
    }
    else if(val==randomval){
        //3.if random value and input value are same

        //3.1 change the body color
        document.body.style.backgroundColor="green";
        //3.2 show the number in guess
        number.textContent=randomval;
        //3.3 message show correct answer
        msg.textContent="Correct Number";
        //3.4 change high score
        if(curScore>Number(highScore.textContent)){
            highScore.textContent=curScore;
        }
        //3.4.1 check whether score value is greater than highscore then only update highscore value
    }
    else if(val>randomval){
        //4. random number is greater than input value

        //4.1 check score is greater than 0 or not
        if(curScore>0){
            //4.1.1 in message show to high
            msg.textContent="Too high";
            //4.1.2 dec the score by 1
            curScore--;
            score.textContent=curScore;
        }
        else{
            //4.2 if score is less than or equal to 0
            msg.textContent="Game Ends";
            //4.2.1 in message show game ends
        }

    }
    else if(val<randomval){
        if(curScore>0){
            //5.1.1 in message show to low
            msg.textContent="Too low";
            //5.1.2 dec the score by 1
            curScore--;
            score.textContent=curScore;
        }
        else{
            //5.2 if score is less than or equal to 0
            msg.textContent="Game Ends";
            //5.2.1 in message show game ends
        }
    }
    else{
        msg.textContent="you lost the Game";
        //6 else case show game ends in msg
    }

});

againbtn.addEventListener("click",()=>{
    //change the body color black
    document.body.style.backgroundColor="#222";
    //generate random number again
    randomval=Math.trunc(Math.random()*50)+1;
    console.log(randomval);
    //in place of number want question
    number.textContent="?";
    //curScore and score value will be 20 again
    curScore=50;
    guess.value="";
    score.textContent=curScore;
    msg.textContent="Start guessing...,";
});