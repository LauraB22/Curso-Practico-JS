//Helpers o Utils
function esPar(numerito) {
    return (numerito % 2 === 0);
}
function calcularProm(lista){
  
    const sumaLista= lista.reduce(/* reduce, va a recibir una funcion y nos va a permitir ir suamando cada elemento*/
    function (valoracum = 0, nuevoElemento) {
        return valoracum + nuevoElemento; 
    }
    );
    
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

//calculadora de mediana 
function MedianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const personita1 = lista[mitad - 1];
        const personita2 = lista[mitad];

        const mediana = calcularProm([personita1, personita2]);
        return mediana;

    }else{
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}
//calculando la mediana general 
const salariosMex = mexico.map(
    function (personita) {
        return personita.salary;
    }
);
const salariosMexSorted = salariosMex.sort(
    function (salarya, salaryb) {
       return salarya - salaryb;
    }
);


const MedianaGenMex = MedianaSalarios(salariosMexSorted);

//Mediana del top 10%
const spliceStart = (salariosMexSorted.length * 90) / 100;
const spliceCount = salariosMexSorted.length - spliceStart;
const salario10Por = salariosMexSorted.splice(spliceStart, spliceCount,);

const medianaTopMex = MedianaSalarios(salario10Por);

console.log(MedianaGenMex, medianaTopMex);
