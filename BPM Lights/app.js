const caracteres = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const $botonFlash = document.querySelector('#blanco-negro');
const $botonSummer = document.querySelector('#rojo-amarillo');
const $botonPsychedelic = document.querySelector('#verde-rosa');
const $botonChill = document.querySelector('#violeta-negro');
const $botonRandom = document.querySelector('#random');
const $botonReset = document.querySelector('#reset');


$botonFlash.addEventListener('click', function () {
    const $bpm = Number(document.querySelector('#bpm').value);
    const milisegundos = convertirBPMaMilisegundos($bpm);

    cambiarFondoCadaTantosSegundos(['white', 'black'],milisegundos);
})

$botonSummer.addEventListener('click', function () {
    const $bpm = Number(document.querySelector('#bpm').value);
    const milisegundos = convertirBPMaMilisegundos($bpm);

    cambiarFondoCadaTantosSegundos(['red', 'yellow'], milisegundos);
})

$botonPsychedelic.addEventListener('click', function () {
    const $bpm = Number(document.querySelector('#bpm').value);
    const milisegundos = convertirBPMaMilisegundos($bpm);

    cambiarFondoCadaTantosSegundos(['green', 'pink'], milisegundos);
})

$botonChill.addEventListener('click', function () {
    const $bpm = Number(document.querySelector('#bpm').value);
    const milisegundos = convertirBPMaMilisegundos($bpm);

    cambiarFondoCadaTantosSegundos(['purple', 'black'], milisegundos);
})

$botonRandom.addEventListener('click', function () {
    const $bpm = Number(document.querySelector('#bpm').value);
    const milisegundos = convertirBPMaMilisegundos($bpm);

    randomizarCadaTantosSegundos(milisegundos);
})

$botonReset.addEventListener('click', function () {
    window.location.reload(true);
})

function cambiarColorRandom(){
    let colorRandom = '#';
    for ( let i = 0; i < 6; i++){
        colorRandom += caracteres[obtenerNumeroRandom()];
    }

    document.body.style.backgroundColor = colorRandom;
}

function randomizarCadaTantosSegundos(ms){
    setInterval(cambiarColorRandom, ms);
}

function obtenerNumeroRandom(){
    const flotante = Math.random() * caracteres.length;
    const entero = Math.floor(flotante);

    return entero;
}

function cambiarFondoCadaTantosSegundos(colores, ms){
    setInterval(cambiarColorFondo, ms, colores);
}

function convertirBPMaMilisegundos(bpm){
    const segundos = 60/bpm;
    const milisegundos = segundos * 1000;

    return milisegundos;
}

function cambiarColorFondo(colores){
    const colorActual = document.body.style.backgroundColor;
    if(colorActual === colores[0]){
        document.body.style.backgroundColor = colores[1];
    } else{
        document.body.style.backgroundColor = colores[0];
    }
}
