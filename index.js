const {edGalho, edGalho, edFolha} = require ('./arrays');

function juntaListas (lista1 , lista2){
    let listaFinal = [];
    let PosicaoAtualLista1 = 0;
    let PosicaoAtualLista2 = 0 

    while (PosicaoAtualLista1 < lista1.length && PosicaoAtualLista2 < lista2.length){
        let produtoAtualLista1 = lista1 [PosicaoAtualLista1];
        let produtoAtualLista2 = lista1 [PosicaoAtualLista2];


    if (produtoAtualLista1.preco < produtoAtualLista2.preco){
    listaFinal [atual] = produtoAtualLista1;
    PosicaoAtualLista1 ++;
    }else{

        listaFinal [atual] = produtoAtualLista2
        PosicaoAtualLista2 ++;

}

atual ++;

}
return listaFinal
 }
console.log (juntaListas (edGalho, edFolha));