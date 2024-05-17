let valor1 = document.querySelector ("#valor1");
let valor2 = document.querySelector ("#valor2");

let btComparar = document.querySelector ("#btComparar");

function compararValores(){
    let valorum = Number(valor1.value);
    let valordois = Number(valor2.value);

    if( valorum > valordois ){
        alert(valorum +" \u00e9 maior");
    }else{
        alert(valordois +" \u00e9 maior");
    };
};


btComparar.onclick = function(){
    compararValores();
}
// janela pop up
// alert("");