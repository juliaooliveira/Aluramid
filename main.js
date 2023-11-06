function tocaSomPom () {
    document.querySelector('idElementoAudio').play();
}

const listaTeclas = document.querySelector('.tecla')
let contador = 0,
for (let contador = 0; contador < listaDeTeclas.length; contador++){ 
    const tecla = listadeTeclas[Contador]
    const instrumento = tecla.classlist[1];
    const idaudio = `#som_ ${instrumento}`;
        console.log(instrumento);
    tecla.onclick = function (){
        tocaSom(idaudio)
    }
    contador = contador +1;
    1 = function(evento){
        if(evento.code =='enter')
    listaTeclas.classlist.add('ativa')
    }
    tecla.onKeyup = function(){
        tecla.classlist.remove('ativa')}
