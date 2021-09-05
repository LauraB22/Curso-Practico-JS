function calcularProm(lista){
//     let sumaLista = 0;
// //     for(let i = 0; i < lista.length; i++){
// //     sumaLista = sumaLista + lista[i];
// // }

    const sumaLista= lista.reduce(/* reduce, va a recibir una funcion y nos va a permitir ir suamando cada elemento*/
        function (valoracum = 0, nuevoElemento) {
            return valoracum + nuevoElemento; 
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

//Mediana
const lista2 = [100, 200, 50, 89, 900, 40];
const mitadLista2 =  parseInt(lista2.length / 2);
let Mediana;

function ordenar(lista2) {
    let listaO = lista2;
    let paso = 0;
    for (let i = 0; i <= listaO.length; i++) {
      for (let j = 0; j < listaO.length; j++) {
        if (listaO[j] > listaO[j + 1]) {
            paso = listaO[j];
            listaO[j] = listaO[j + 1];
            listaO[j + 1] = paso;
        }
      }
    }
    return listaO;
  }

function esPar(numerito) {
    if(numerito % 2 === 0){
        return true;
    }else{
        return false;
    }
}

if(esPar(lista2.length)){
    const elemento1 = lista2[mitadLista2 - 1];
    const elemento2 = lista2[mitadLista2];
    const prom_elem = calcularProm ([elemento1, elemento2]);
    Mediana = prom_elem;

}else{
    Mediana = lista2[mitadLista2];
}

/*Moda*/
const lista3 = [1,2,3,4,5,1,2,2,2,1,,1,2];

const lista3Count = {}; //se crea como objeto

lista3.map(
    function (elemento) {
        if(lista3Count[elemento]){
            lista3Count[elemento] += 1;
        }
        else{
            lista3Count[elemento] = 1;
        }
    }
);

const lista3Array = Object.entries(lista3Count).sort(
    function (valorAcum, nuevoelem) {
        valorAcum - nuevoelem;
    }
);
const lista3Array2 = Object.entries(lista3Count).sort(
    function(elementoA, elementoB){
        return elementoA[1] - elementoB[1];
    }
);

constmoda = lista3Array2[lista3Array2.length - 1];
