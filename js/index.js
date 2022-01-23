let musica = document.querySelector('audio');



let duracaoMusica =  document.querySelector('.fim');

musica.onloadeddata = () => {
duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
}


document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);


musica.addEventListener('timeupdate', atualizarBarra);

//Ao carregae a página o botao pause vai ter como estilo: Display:None;
//Funções
function codeAddress(){
  const botao_pause = document.querySelector('.botao-pause').style.display = 'none';
 
}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
  musica.pause();
  
  document.querySelector('.botao-pause').style.display = 'none';
  
  document.querySelector('.botao-play').style.display = 'block';
  
}

function atualizarBarra(){
  let barra = document.querySelector('progress');
  barra.style.width =  Math.floor((musica.currentTime / musica.duration) * 100) + '%';
  let tempoDecorrido = document.querySelector('.inicio');
  tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
 let campoMinutos = Math.floor(segundos / 60);
 let campoSegundos = segundos % 60;
 if(campoSegundos < 10){
   campoSegundos = '0' + campoSegundos;
 }
  return campoMinutos+':'+campoSegundos;
}




