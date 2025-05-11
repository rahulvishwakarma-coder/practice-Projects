const textarea = document.querySelector('textarea');
const total_display = document.querySelector('.total span');
const remain_display = document.querySelector('.remain span');


let total_char = 0;
let remain = 50;

textarea.addEventListener('input',(e)=>{
    total_char = e.target.value.length;
    remain = 50 - total_char;
    total_display.innerHTML = total_char;
    remain_display.innerHTML = remain;
})