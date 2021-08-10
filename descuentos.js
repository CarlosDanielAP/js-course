const cupones = [
  { codigo: "platzi", descuento: 15 },
  { codigo: "cupon", descuento: 50 },
];

function buscarCupon() {
  const resultP = document.getElementById("ResultCupon");
  const miCupon = document.getElementById("InputCupon");
  const cuponText = miCupon.value.toString();
  if (cupones.find((cupon) => cupon.codigo === cuponText)) {
    const cuponValido = cupones.find((cupon) => cupon.codigo === cuponText);

    const cuponValue = cuponValido.descuento;

    const inputPrice = document.getElementById("InputCuponPrice");
    const priceValue = inputPrice.value;

    resultP.innerText =
      "Tu cupon es valido obtuviste el " +
      cuponValue +
      "% de descuento, el total es de: $" +
      calcularPrecioConDescuento(priceValue, cuponValue);
  } else {
    resultP.innerText = "Verifica Tu Cupon";
  }
}

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const PrecioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return PrecioConDescuento;
}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;
  const inputDiscount = document.getElementById("InputDiscount");
  const inputValue = inputDiscount.value;

  const PrecioConDescuento = calcularPrecioConDescuento(priceValue, inputValue);

  const resultP = document.getElementById("ResultP");
  resultP.innerText = "El Precio Con Descuento Es: $" + PrecioConDescuento;
}
