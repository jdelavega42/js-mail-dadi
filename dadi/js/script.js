const userNumber = document.getElementById('user-number');
const botNumber = document.getElementById('bot-number')
const submit = document.getElementById('throw');
const element = document.querySelector('.card-header');
const result = document.getElementById('result')
submit.addEventListener('click', function(){   
    let x = y = getRandomInt ;
    function getRandomInt(min, max) {
        min = Math.ceil(1);
        max = Math.floor(7);
        return Math.floor(Math.random() * (7 - 1) + 1);
    }
    const userDice = x();
    const botDice = y();
    let message = '';
    let bgColor = '';
    if (userDice > botDice) {
        message = 'hai vinto!';
        bgColor = 'bg-success';
        } else if (userDice === botDice) {
        message = 'Pareggio. riprova!';
        bgColor = 'bg-warning';
        } else {
        message = 'Ritenta, sarai più fortunato!';
        bgColor = 'bg-danger';
    }
    console.log(userDice, botDice, message);
    element.classList.remove('d-none')    
    if (element.classList.contains('bg-success')){
        element.classList.remove('bg-success');
    } else if (element.classList.contains('bg-danger')) {
        element.classList.remove('bg-danger'); 
    } else if (element.classList.contains('bg-warning')) {
        element.classList.remove('b-warning'); 
    }
    element.classList.add(bgColor)
    userNumber.innerHTML = userDice;
    botNumber.innerHTML = botDice;
    result.innerHTML = message;
})