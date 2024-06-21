let numeroSecreto = 0;
let maxNumero = 100;
let pontuacao = 0;
let pergunta = 0;
let tentativasErradas = 0;

function atualizarTexto(tag, texto) {
  campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function view(alert) {
    alert.style.visibility = "visible";
}
  
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function novoNumero() {
  numeroSecreto = getRandomInt(maxNumero);
  console.log(numeroSecreto);
}

function chutar() {
  if (numeroSecreto == 0) {
    novoNumero();
  }
  let numeroChute = document.querySelector("input").value;
  console.log(`Numero chutado: ${numeroChute}`);
  let mensagem = numeroChute > numeroSecreto ? 'O número é menor! <' : 'O número é maior! >';
  atualizarTexto('h1', mensagem);

  if (numeroChute == "") {
    alert("Ops! Informe um número!");
  }
  if (numeroChute == numeroSecreto) {
    view(alertSucess);
    atualizarTexto('h1', 'uHulll!!');
  } else {
    //view(alertErro);
    tentativasErradas = tentativasErradas + 1;
  }
}