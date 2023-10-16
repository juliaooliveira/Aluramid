function tocaSomPom () {
    document.querySelector('idElementoAudio').play();
}

const listaTeclas = document.querySelector('.tecla')
let contador = 0,
while(){ 
    listaTeclas[contador].onclick = tocaSomPom;
    contador = contador +1;

}
 
