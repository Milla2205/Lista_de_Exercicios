let valor = document.querySelector ("#valor");

let btBuscar = document.querySelector ("#btBuscar");

function buscarValores(){
    let valorum = Number(valor.value);

    if( valorum == 001 ){
        alert("Parafuso");
    }else if( valorum == 002 ){
        alert("Porca");
    }else if( valorum == 003 ){
        alert("Prego");
    }else{
        alert("Diversos");
    };
};


btBuscar.onclick = function(){
    buscarValores();
};
