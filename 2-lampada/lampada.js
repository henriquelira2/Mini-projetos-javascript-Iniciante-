const ligar = document.getElementById("ligar");
const desligar = document.getElementById("desligar");
const lampada = document.getElementById("lampada");

function isQuebrado() {
  return lampada.src.indexOf("lampada-quebrada") > -1;
}

function acender() {
  if (!isQuebrado()) {
    lampada.src = "img/lampada-acesa.jpg";
  }
}
function apagar() {
  if (!isQuebrado()) {
    lampada.src = "img/lampada-apagada.jpg";
  }
}
function quebrar() {
  lampada.src = "img/lampada-quebrada.jpg";
}

ligar.addEventListener("click", acender);
desligar.addEventListener("click", apagar);

lampada.addEventListener("mouseover", acender);
lampada.addEventListener("mouseleave", apagar);

lampada.addEventListener("dblclick", quebrar);
