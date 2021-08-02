//Codigo del cuadrado
console.group("Cuadrados");
//const ladoCuadrado= 5;
//console.log("los lados del cuadrado miden: " + ladoCuadrado +(" cm"));

function perimetroCuadrado(lado) { 
    return lado * 4;
}

//console.log("el perimetro del cuadrado es: " + perimetroCuadrado+(" cm"));

function areaCuadrado(lado){  
    return lado * lado;
}
//console.log("el area del cuadrado es: " + areaCuadrado +(" cm 2"));
console.groupEnd();

//Codigo del triangulo
console.group("Triangulos");
const ladoTriangulo1= 6;
const ladoTriangulo2=6;
const baseTriangulo =4;
const alturaTriangulo=5.5;

// console.log(
//     "los lados del triangulo miden: " 
//     + ladoTriangulo1 +(" cm,")
//     + ladoTriangulo2 +(" cm, ")
//     + baseTriangulo +("cm")
//     );

function perimetroTriangulo(lado1, lado2, base){
    return lado1+lado2+base;

}

// console.log("El perimetro del triangulo es: " + perimetroTriangulo +(" cm"));

function areaTriangulo(base, altura){
    return (base*altura)/2;
}

// console.log("El area del triangulo es: " + areaTriangulo +(" cm 2"));

console.groupEnd();

//Codigo del circulo
console.group("circulos");
const radioCirculo= 4;

const pi= Math.PI;

function diametroCirculo(radio){
    return  radio*2;
}

function perimetroCirculo(radio){
    const diametro=diametroCirculo(radio);
    return diametro*pi;
}
//console.log("el perimetro del circulo es: " + perimetroCirculo +(" cm "));

function areaCirculo(radio){
    return (radio*radio)*pi;
}

//console.log("el area del circulo es: " + areaCirculo +(" cm 2"));

console.groupEnd();