
var cronometro = (function () {

var temporizador = document.getElementById('temporizador')

var seg = 0;
var min = 0;
var hora = 0;
var cron; 

function iniciar(){
    cron = setInterval(function(){
        tempoPassando();
    }, 1000);
}

function parar() {
    clearInterval(cron);
}

function zerar(){
    parar();
    seg = 0;
    min = 0;
    seg = 0;

    atualizarTempo();

}

function tempoPassando(){

        seg ++;

    if ( seg == 60){
        seg = 0;
        min++;

    } 
    
    if( min == 60){
        min = 0;
        hora++;
    }
    atualizarTempo();
}

function atualizarTempo(){
    temporizador.textContent = retornarTempoAtualizado()
}

function retornarTempoAtualizado(){

    var segundos = (seg < 10) ? "0" + seg : seg;
    var minutos = (min < 10) ? "0" + min : min;
    var horas = (hora < 10) ? "0" + hora : hora;

    return
    `${horas}:${minutos}:${segundos}`;

}

return
    iniciar;
    parar;
    zerar;
    retornarTempoAtualizado;

} ) ()