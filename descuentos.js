

function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const PrecioConDescuento=(precio*porcentajePrecioConDescuento)/100;
    return PrecioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice=document.getElementById("InputPrice");
    const priceValue= inputPrice.value;
    const inputDiscount=document.getElementById("InputDiscount");
    const inputValue=inputDiscount.value;

    const PrecioConDescuento=calcularPrecioConDescuento(priceValue,inputValue);

    const resultP=document.getElementById("ResultP");
    resultP.innerText="El Precio Con Descuento Es: $"+ PrecioConDescuento;
}