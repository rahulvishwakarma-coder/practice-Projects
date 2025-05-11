const year = document.querySelector('.year');
const day = document.querySelector('.day');
const month = document.querySelector('.month');
const date = document.querySelector('.date');

const currentdate = new Date();

const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const Months = ['January','February','March','April','May','June','July','August','September','October','November','December']
year.innerHTML = currentdate.getFullYear();
day.innerHTML = days[currentdate.getDay()];
date.innerHTML = currentdate.getDate();
month.innerHTML = Months[currentdate.getMonth()];