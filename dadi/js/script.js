const userNumber = document.getElementById('user-number');
const botNumber = document.getElementById('bot-number')
const submit = document.getElementById('throw');
const element = document.querySelector('.card-header');
const result = document.getElementById('result');
const reset = document.getElementById('reset');
submit.addEventListener('click', function(){   
    let x = y = getRandomInt ;
    function getRandomInt(min, max) {
        min = Math.ceil(1);
        max = Math.floor(7);
        return Math.floor(Math.random() * (7 - 1) + 1);
    }
    const userDice = x();
    const botDice = y();
    let diceFaceX = '';
    let diceFaceY = '';
    if (userDice === 1) {
        diceFaceX = '&#9856';
    } else if (userDice === 2){
        diceFaceX = '&#9857';
    } else if (userDice === 3){
        diceFaceX = '&#9858';
    } else if (userDice === 4){
        diceFaceX = '&#9859';
    } else if (userDice === 5){
        diceFaceX = '&#9860';
    } else if (userDice === 6){
        diceFaceX = '&#9861';
    }
    if (botDice === 1) {
        diceFaceY = '&#9856';
    } else if (botDice === 2){
        diceFaceY = '&#9857';
    } else if (botDice === 3) {
        diceFaceY = '&#9858';
    } else if (botDice === 4) {
        diceFaceY = '&#9859';
    } else if (botDice === 5) {
        diceFaceY = '&#9860';
    } else if (botDice === 6) {
        diceFaceY = '&#9861';
    }   
    console.log(diceFaceX, diceFaceY);
    let message = '';
    let bgColor = '';
    if (userDice > botDice) {
        message = 'hai vinto!';
        bgColor = 'bg-success';
        } else if (userDice === botDice) {
        message = 'Pareggio. Riprova!';
        bgColor = 'bg-warning';
        } else {
        message = 'Ritenta, sarai più fortunato!';
        bgColor = 'bg-danger';
    }
    console.log(userDice, botDice, message);
    userNumber.classList.toggle('dice');
    botNumber.classList.toggle('dice');
    element.classList.toggle('d-none') ;   
    if (element.classList.contains('bg-success')){
        element.classList.remove('bg-success');
    } else if (element.classList.contains('bg-danger')) {
        element.classList.remove('bg-danger'); 
    } else if (element.classList.contains('bg-warning')) {
        element.classList.remove('b-warning'); 
    }
    element.classList.add(bgColor)
    userNumber.innerHTML = diceFaceX;
    botNumber.innerHTML = diceFaceY;
    result.innerHTML = message;
    submit.classList.toggle('d-none');
    reset.classList.toggle('d-none');
})

// RESET
reset.addEventListener('click', function() {
    userNumber.classList.toggle('dice');
    botNumber.classList.toggle('dice');
    element.classList.toggle('d-none');   
    userNumber.innerHTML = '';
    botNumber.innerHTML = '';
    result.innerHTML ='';
    submit.classList.toggle('d-none');
    reset.classList.toggle('d-none');
})