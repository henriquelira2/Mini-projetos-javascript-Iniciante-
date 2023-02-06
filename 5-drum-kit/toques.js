"use strict";
const sons = {
  1: "aggressive-beast.wav",
  2: "arcade-retro.wav",
  3: "cartoon-toy.wav",
  4: "dog-barking.wav",
  5: "fast-small.wav",
  6: "female-astonished.wav",
  7: "retro-game.wav",
  8: "sick-man.wav",
  9: "wild-lion.wav",
};
const criarDiv = (texto) => {
  const div = document.createElement("div");
  div.classList.add("key");
  div.textContent = texto;
  div.id = texto;
  document.getElementById("container").appendChild(div);
};

/* const exibir = (sons) => Object.keys(sons).forEach(criarDiv);  */
const exibir = (sons) => {
  Object.keys(sons).forEach(criarDiv);
};

const tocarSom = (numero) => {
  const audio = new Audio(`./sounds/${sons[numero]}`);
  audio.play();
};
const pararSom = () =>  audio.pause;

const adcionarEfeito = (numero) => {
  document.getElementById(numero).classList.add("active");
};
const removerEfeito = (numero) => {
  const div = document.getElementById(numero);
  const removeActive = () => div.classList.remove("active");
  div.addEventListener("transitionend", removeActive);
};
const ativarDiv = (evento) => {
  let numero = "";

  /*   const numero =
    evento.type == "click" ? evento.target.id : evento.key.toUpperCase(); */

  if (evento.type == "click") {
    numero = evento.target.id;
  } else {
    numero = evento.key.toUpperCase();
  }

  const numeroPermitada = sons.hasOwnProperty(numero);
  if (numeroPermitada) {
    adcionarEfeito(numero);
    tocarSom(numero);
    removerEfeito(numero);
  }
  pararSom();
};

exibir(sons);

document.getElementById("container").addEventListener("click", ativarDiv);

window.addEventListener("keydown", ativarDiv);
