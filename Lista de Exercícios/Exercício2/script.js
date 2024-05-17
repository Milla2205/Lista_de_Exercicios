let valorQuilo = document.querySelector ("#valorQuilo");
let consumoQuilo = document.querySelector ("#consumoQuilo");
let btComputar = document.querySelector ("#btComputar");
let valorPagamento = document.querySelector ("#valorPagamento");

function verificarValor(){
    let valor = Number(valorQuilo.value);
    let consumo = Number(consumoQuilo.value);
    let quilo = 1;
    let resultado = (( quilo * consumo )*( valor ));
    valorPagamento.textContent = String(resultado);
};

btComputar.onclick = function (){
    verificarValor();

};

// 1 = 100
// 0,9 = x
// x = 0.9 * 100
// x = 90