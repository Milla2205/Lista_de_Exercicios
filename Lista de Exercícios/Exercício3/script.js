let valorSaldo = document.querySelector ("#valorSaldo");
let btComputar = document.querySelector ("#btComputar");
let valorPagamento = document.querySelector ("#valorPagamento");

function verificarValor(){
    let valor = Number(valorSaldo.value);
    let taxa = 0.01;
    let resultado = (( valor * taxa )+( valor ));
    valorPagamento.textContent = String(resultado);
};

btImprimir.onclick = function (){
    verificarValor();

};