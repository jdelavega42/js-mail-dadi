const userNumber = document.getElementById('user-number');
const botNumber = document.getElementById('bot-number')
const submit = document.getElementById('throw');
submit.addEventListener('click', function(){   
    let x = y = getRandomInt ;
    function getRandomInt(min, max) {
        min = Math.ceil(1);
        max = Math.floor(7);
        return Math.floor(Math.random() * (7 - 1) + 1);
    }
    userNumber.innerHTML = x();
    botNumber.innerHTML = y();
    console.log(parseInt(userNumber.innerHTML),typeof parseInt(botNumber.innerHTML));
    if (parseInt(userNumber.innerHTML) > parseInt(botNumber.innerHTML)) {
        console.log('hai vinto!');
    } else if (parseInt(userNumber.innerHTML) === parseInt(botNumber.innerHTML)) {
        console.log('Pareggio. riprova!');
    } else {
        console.log('Ritenta, sarai più fortunato!');
    }
})
