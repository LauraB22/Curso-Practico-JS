console.log("Hello World");
function perimetroCuadrado(lado) {
    return lado * 4;
}
function areaCuadrado(lado){
    return lado * lado
}

function perimetroTriangulo (ladoT1, ladoT2, baseT){
    return ladoT1 + ladoT2 + baseT
}
function areaTriangulo (baseT, alturaT){
    return (baseT * alturaT)/2;
}

function diametroCirculo (radioCirculo){
    return radioCirculo * 2;
}
const Pi = Math.PI;
function perimetroCirculo (radioCirculo){
    const diametro =diametroCirculo(radioCirculo);
    return diametro * Pi;
}
function areaCirculo (radioCirculo){
    return (radioCirculo * radioCirculo) * Pi;
}
//Interactuando con el HTML
function calcularPCuadrado(){
    const input = document.getElementById("InputCuadrado"); //nos permite obtener ese elemento del html para realizar la funcion 
    const value = input.value; //obtenemos el valor que escribieron los usuarios
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado"); //nos permite obtener ese elemento del html para realizar la funcion 
    const value = input.value; //obtenemos el valor que escribieron los usuarios
    const area = areaCuadrado(value);
    alert(area);
}

function calcularPTriangulo(){
    const input1 = document.getElementById("InputLado1"); //nos permite obtener ese elemento del html para realizar la funcion 
    const value1 = Number(input1.value); //obtenemos el valor que escribieron los usuarios
    const input2 = document.getElementById("InputLado2");
    const value2 = Number(input2.value);
    const input3 = document.getElementById("InputBase");
    const value3 = Number(input3.value);
    const perimetroT = perimetroTriangulo(value1, value2, value3);
    alert(perimetroT);
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("InputBase"); //nos permite obtener ese elemento del html para realizar la funcion 
    const value1 = Number(input1.value); //obtenemos el valor que escribieron los usuarios
    const altura = document.getElementById("InputAltura");
    const value2 = Number(altura.value);
    const AreaT = areaTriangulo(value1, value2);
    alert(AreaT);
}

function calcularPCirculo(){
    const input1 = document.getElementById("InputRadio");
    const valueR = Number(input1.value);
    const PerCirculo = perimetroCirculo(valueR);
    alert(PerCirculo);
}

function calcularAreaCirculo(){
    const input1 = document.getElementById("InputRadio");
    const valueR = Number(input1.value);
    const AreaCir = areaCirculo(valueR);
    alert(AreaCir);
}