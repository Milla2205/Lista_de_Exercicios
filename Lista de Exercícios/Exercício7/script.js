let valor = document.querySelector ("#valor");

let btComparar = document.querySelector ("#btComparar");

function compararValores(){
    let n = Number(valor.value);

    // % é resto, == é comparação
    if( n % 2 == 0 ){
        alert("\u00c9 par!");
    }else if( n % 2 == 1 ){
        alert("\u00c9 \u00edmpar!");
    };
};


btComparar.onclick = function(){
    compararValores();
}
// janela pop up
// alert("");