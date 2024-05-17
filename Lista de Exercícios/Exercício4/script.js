let valor1 = document.querySelector ("#valor1");
let valor2 = document.querySelector ("#valor2");
let valor3 = document.querySelector ("#valor3");

let btMedias = document.querySelector ("#btMedias");

let valorMedAritmetica = document.querySelector ("#valorMedAritmetica");
let valorMedPonderada = document.querySelector ("#valorMedPonderada");
let valorSomaDasMedias = document.querySelector ("#valorSomaDasMedias");
let valorMedDasMed = document.querySelector ("#valorMedDasMed");

let pesoum = 3;
let pesodois = 2;
let pesotres = 5;


function fazerMedAritmetica(){
    let valorum = Number(valor1.value);
    let valordois = Number(valor2.value);
    let valortres = Number(valor3.value);

    let resultado = (( valorum + valordois + valortres ) / 3 );
    valorMedAritmetica.textContent = String(resultado);
};


function fazerMedPonderada(){
    let valorum = Number(valor1.value);
    let valordois = Number(valor2.value);
    let valortres = Number(valor3.value);
    
    let resultado =   ((( valorum * pesoum ) + ( valordois * pesodois ) + (valortres * pesotres ))
                    / ( pesoum + pesodois + pesotres ));
    valorMedPonderada.textContent = String(resultado);
};


function fazerSomaDasMedias(){
    // primeira média
    let valorUmMedUm = Number(valor1.value);
    let valorDoisMedUm = Number(valor2.value);
    let valorTresMedUm = Number(valor3.value);

    let resultadoMedUm = (( valorUmMedUm + valorDoisMedUm + valorTresMedUm ) / 2 );

    // segunda média
    let valorUmMedDois = Number(valor1.value);
    let valorDoisMedDois = Number(valor2.value);
    let valorTresMedDois = Number(valor3.value);
    
    let resultadoMedDois =   ((( valorUmMedDois * pesoum ) + ( valorDoisMedDois * pesodois ) + ( valorTresMedDois * pesotres ))
                    / ( pesoum + pesodois + pesotres ));

    // resultado da soma
    let resultadoTotal = ( resultadoMedUm + resultadoMedDois );

    valorSomaDasMedias.textContent = String(resultadoTotal);
}

function fazerMedDasMed(){
    // primeira média
    let valorUmMedUm = Number(valor1.value);
    let valorDoisMedUm = Number(valor2.value);
    let valorTresMedUm = Number(valor3.value);

    let resultadoMedUm = (( valorUmMedUm + valorDoisMedUm + valorTresMedUm ) / 2 );

    // segunda média
    let valorUmMedDois = Number(valor1.value);
    let valorDoisMedDois = Number(valor2.value);
    let valorTresMedDois = Number(valor3.value);
    
    let resultadoMedDois =   ((( valorUmMedDois * pesoum ) + ( valorDoisMedDois * pesodois ) + ( valorTresMedDois * pesotres ))
                    / ( pesoum + pesodois + pesotres ));

    // resultado da soma
    let resultadoTotal = ( ( resultadoMedUm + resultadoMedDois ) / 2 );

    valorMedDasMed.textContent = String(resultadoTotal);
}

btMedias.onclick = function (){
    fazerMedAritmetica();
    fazerMedPonderada();
    fazerSomaDasMedias();
    fazerMedDasMed();
};