
const userName = ['paolo.duzioni', 'olga.demina', 'roberto.parrella', 'angelo.prospero', 'alessio.libbi', 'antonio.rocco', 'stefano.martino', 'filippo.foti', 'noob.perez', 'federico.ceteroni', 'giuseppe.donnici', 'italo.cirillo', 'claudio.ciobanu', 'claudio.leone', 'cristian.natoli', 'diego.giardina', 'francesca.loria', 'francesca.perrotta', 'francesco.vinci', 'giada.genovesi', 'giorgia.capponi', 'leonardo.filesi', 'luca.pertosa', 'lorenzo.bertarelli', 'luigi.defilippo','marco.mazzotti', 'marianita.dileo', 'massimiliano.novello', 'mirko.sorrentino', 'paola.coccetti', 'pietro.savini', 'ruggero.coco', 'silvano.gul', 'silvio.salza', 'simmaco.nespoli', 'simone.viaggi', 'yared.ghebreghergis', 'john.delavega'];

const submit = document.getElementById('sign-in');
submit.addEventListener('click', function() {
const userSearch = document.getElementById('username-input').value;
console.log(userSearch);
let isFound = false;
for (let i = 0; i < userName.length; i++) {
    const currentUser = userName[i];
    if (currentUser.toLocaleLowerCase() === userSearch.toLocaleLowerCase()) {
        isFound = true;
    }
}
const container = document.querySelector('.container');
const message = document.createElement('div');
let result = '';
if (isFound === true){
    result = 'Accesso mail consentito';
} else {
    result = 'Utente non trovato';
}
message.innerHTML = result;
container.append(message)
})