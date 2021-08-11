function calcularMediana(lista) {
  console.log("holis");
  console.log(lista);
  const linstaOrdenada = lista.sort(function (a, b) {
    return a - b;
  });
  console.log(linstaOrdenada);
  const mitadLista1 = parseInt(linstaOrdenada.length / 2);

  let mediana;

  if (esPar(linstaOrdenada.length)) {
    const elemento1 = linstaOrdenada[mitadLista1 - 1];
    const elemento2 = linstaOrdenada[mitadLista1];

    const promedioElemento1y2 = calcularMediaArimetica([elemento1, elemento2]);
    return (mediana = promedioElemento1y2);
  } else {
    return (mediana = linstaOrdenada[mitadLista1]);
  }
}
function esPar(numerito) {
  if (numerito % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
function calcularMediaArimetica(lista) {
  const sumList = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promedioList = sumList / lista.length;

  return promedioList;
}
