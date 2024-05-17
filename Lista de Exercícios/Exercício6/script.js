let valor1 = document.querySelector ("#valor1");
let valor2 = document.querySelector ("#valor2");
let valor3 = document.querySelector ("#valor3");
let valor4 = document.querySelector ("#valor4");

let btComparar = document.querySelector ("#btComparar");

function compararValores(){
    let valorum = Number(valor1.value);
    let valordois = Number(valor2.value);
    let valortres = Number(valor3.value);
    let valorquatro = Number(valor4.value);

    if( valorum < valordois && valorum < valortres && valorum < valorquatro ){
        alert(valorum +" \u00e9 menor");
    }else if( valordois < valorum && valordois < valortres && valordois < valorquatro ){
        alert(valordois +" \u00e9 menor");
    }else if( valortres < valorum && valortres < valordois && valortres < valorquatro ){
        alert(valortres +" \u00e9 menor");
    }else{
        alert(valorquatro +" \u00e9 menor");
    };
};


btComparar.onclick = function(){
    compararValores();
}
// janela pop up
// alert("");