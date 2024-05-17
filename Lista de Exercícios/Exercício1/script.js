// variável  = é atribuição
let ipvalor =  document.querySelector("#ipvalor");
let precoprod = document.querySelector("#precoprod");
let btdiferenca = document.querySelector("#btdiferenca");
let h3resultado = document.querySelector("#h3resultado");

// funções/tarefa
function somarvalores(){
    let valor1 = Number(ipvalor.value);
    let valor2 = Number(precoprod.value);
    let resultado = valor1 - valor2;
    h3resultado.textContent = String(resultado);
};
// executar ao clicar
btdiferenca.onclick = function(){
    somarvalores();
};

// 
