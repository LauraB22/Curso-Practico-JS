function CalcPrecConDescuento(precio, descuento){
    const PorcPrecConDesc = 100 - descuento;
    const PrecioConDesc = (precio * PorcPrecConDesc)/100;
    return PrecioConDesc
}

function CalcPrecDesc(){
    const inputPrice = document.getElementById("InputPrice");
    const PriceValue = inputPrice.value; //de este elemento vamos a sacar el valor que los usuarios escriben
    const inputDiscount = document.getElementById("InputDiscount");
    const Discoutvalue = inputDiscount.value;

    const PrecioConDesc = CalcPrecConDescuento(PriceValue, Discoutvalue);
    const Resultado= document.getElementById("PriceFinal");
    Resultado.innerText = "El precio con descuento son $  " + PrecioConDesc;
}