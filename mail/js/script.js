
const userName = ['paolo.duzioni', 'olga.demina', 'roberto.parrella', 'angelo.prospero', 'alessio.libbi', 'antonio.rocco', 'stefano.martino', 'filippo.foti', 'noob.perez', 'federico.ceteroni', 'giuseppe.donnici', 'italo.cirillo', 'claudio.ciobanu', 'claudio.leone', 'cristian.natoli', 'diego.giardina', 'francesca.loria', 'francesca.perrotta', 'francesco.vinci', 'giada.genovesi', 'giorgia.capponi', 'leonardo.filesi', 'luca.pertosa', 'lorenzo.bertarelli', 'luigi.defilippo','marco.mazzotti', 'marianita.dileo', 'massimiliano.novello', 'mirko.sorrentino', 'paola.coccetti', 'pietro.savini', 'ruggero.coco', 'silvano.gul', 'silvio.salza', 'simmaco.nespoli', 'simone.viaggi', 'yared.ghebreghergis', 'john.delavega'];
const submit = document.getElementById('sign-in');
submit.addEventListener('click', function() {
const userSearch = document.getElementById('username-input').value;
let isFound = false;
for (let i = 0; i < userName.length; i++) {
    const currentUser = userName[i];
    if (currentUser.toLocaleLowerCase() === userSearch.toLocaleLowerCase()) {
        isFound = true;
    }
}
const element = document.getElementById('output');
let result = '';
let bgColor = '';
if (isFound === true){
    result = 'Accesso mail consentito';
    bgColor = `bg-success`
} else {
    result = 'Utente non trovato';
    bgColor = `bg-danger`;
}
element.classList.remove('d-none')
if (element.classList.contains('bg-success')){
    element.classList.remove('bg-success');
} else if (element.classList.contains('bg-danger')) {
    element.classList.remove('bg-danger');    
}

element.classList.add(bgColor);
element.innerHTML = `${result}`;
console.log(element);
})