const display = document.querySelectorAll('.score span');
const Moves  = document.querySelector('.moves');
const message = document.querySelector('.message');

const totalmoves = ["paper","scissor","rock"];

let playerscore = 0;
let computersscore = 0;


Moves.addEventListener('click',(e)=>{
    const computermove = totalmoves[randomValue(0,2)];
    const playermove = e.target.id;
    const winnerscore = winner(playermove,computermove);

    if(winnerscore == 1){
        playerscore = playerscore +1;
        display[0].innerHTML = playerscore;
    }
    else if(winnerscore == 0){
        computersscore = computersscore +1;
        display[1].innerHTML = computersscore;
    }
})

const randomValue =(min , max)=>{
  return (Math.round(Math.random() *(max -min)) +min)
}


const winner =(playermove , computermove)=>{
    if(playermove == computermove){
        message.innerHTML = "It's a tie!";
        return -1;
    }
    else if(playermove == 'paper' && computermove == 'rock'){
        message.innerHTML = `You win! ${playermove} beat ${computermove}`;
        return 1;
    }
    else if(playermove == 'scissor' && computermove == 'paper'){
        message.innerHTML = `You win! ${playermove} beat ${computermove}`;
        return 1;
    }
    else if(playermove == 'rock' && computermove == 'scissor'){
        message.innerHTML = `You win! ${playermove} beat ${computermove}`;
        return 1;
    }
    else{
        message.innerHTML = `You Lose! ${computermove} beat ${playermove}`;
        return 0;
    }
}
