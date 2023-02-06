const onOff = document.getElementById("onOff");
const off = document.getElementById("off");
const lampada = document.getElementById("lampada");

function isQuebrado() {
  return lampada.src.indexOf("lampada-quebrada") > -1;
}
function trocaLampada() {
  if (isQuebrado()) {
    lampada.src = "img/lampada-apagada.jpg";
  }
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
function ligaDesliga() {
  if (onOff.textContent == "Ligar") {
    acender();
    onOff.textContent = "Desligar";
  } else {
    apagar();
    onOff.textContent = "Ligar";
  }
}

onOff.addEventListener("click", ligaDesliga);

lampada.addEventListener("mouseover", acender);
lampada.addEventListener("mouseleave", apagar);

lampada.addEventListener("dblclick", quebrar);
off.addEventListener("click", trocaLampada);
