const vermelho = document.getElementById("vermelho");
const amarelo = document.getElementById("amarelo");
const verde = document.getElementById("verde");

const semaforo = document.getElementById("img");

function pare() {
  semaforo.src = "img/vermelho.png";
}
function atencao(){
    semaforo.src = "img/amarelo.png"
}
function ande(){
    semaforo.src ="img/verde.png"
}

vermelho.addEventListener("click", pare);
amarelo.addEventListener("click" ,atencao);
verde.addEventListener("click",ande);