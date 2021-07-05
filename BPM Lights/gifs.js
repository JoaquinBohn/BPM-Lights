const gifs = ['image/1.gif', 'image/2.gif', 'image/3.gif', 'image/4.gif', 'image/5.gif', 'image/6.gif'];
let gifAnterior = 0;

const $bpmButton = document.querySelector('#enviar');
const $botonReset = document.querySelector('#reset');

$bpmButton.addEventListener('click', function () {
    const $bpm = Number(document.querySelector('#bpm').value);
    const milisegundos = convertirBPMaMilisegundos($bpm);

    repetirCadaTantosSegundos(milisegundos);
})

$botonReset.addEventListener('click', function () {
    window.location.reload(true);
})

function repetirCadaTantosSegundos(ms){
    setInterval(cambiarFondo, ms);
}

function convertirBPMaMilisegundos(bpm){
    const segundos = 60/bpm;
    const milisegundos = segundos * 1000;

    return milisegundos;
}

function obtenerNumeroRandom(){
    const flotante = Math.random() * gifs.length;
    const entero = Math.floor(flotante);

    return entero;
}

function cambiarFondo(){
    let numeroNuevo = obtenerNumeroRandom();
    while(numeroNuevo === gifAnterior){
        numeroNuevo = obtenerNumeroRandom();
    }
    elegirGifFondo(numeroNuevo);
    gifAnterior = numeroNuevo;
}

function elegirGifFondo(numero){
    const fondo = gifs[numero];
    document.querySelector('.container').getElementsByTagName('img')[0].src = fondo;
}

