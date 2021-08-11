function calcularMediaArimetica(lista) {
  /* for (let i = 0; i < lista.length; i++) {
    sumList = sumList + lista[i];
  }*/

  const sumList = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promedioList = sumList / lista.length;

  return promedioList;
}
