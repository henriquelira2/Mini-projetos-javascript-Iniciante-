const buttons = document.getElementById("buttons");
const semaforo = document.getElementById("img");
let corIndex = 0;
intervalID = null;

const trafficLigth = (event) => {
  stopAutomatic();
  ligar[event.target.id]();
};
const nextIndex = () => {
  /* corIndex = corIndex < 2 ? ++corIndex : 0;               -- ternario*/

  if (corIndex < 2) {
    corIndex++;
  } else {
    corIndex = 0;
  }
};
const stopAutomatic = () => {
  clearInterval(intervalID);
};
const trocaDeCor = () => {
  const cores = ["vermelho", "amarelo", "verde"];
  const cor = cores[corIndex];
  ligar[cor]();
  nextIndex();
};
const ligar = {
  vermelho: () => (img.src = "img/vermelho.png"),
  amarelo: () => (img.src = "img/amarelo.png"),
  verde: () => (img.src = "img/verde.png"),
  automatic: () => (intervalID = setInterval(trocaDeCor, 1000)),
};

buttons.addEventListener("click", trafficLigth);
