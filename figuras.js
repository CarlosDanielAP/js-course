//Codigo del cuadrado
console.group("Cuadrados");
const ladoCuadrado= 5;
console.log("los lados del cuadrado miden: " + ladoCuadrado +(" cm"));

const perimetroCuadrado = ladoCuadrado * 4;
console.log("el perimetro del cuadrado es: " + perimetroCuadrado+(" cm"));

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("el area del cuadrado es: " + areaCuadrado +(" cm 2"));
console.groupEnd();

//Codigo del triangulo
console.group("Triangulos");
const ladoTriangulo1= 6;
const ladoTriangulo2=6;
const baseTriangulo =4;
const alturaTriangulo=5.5;

console.log(
    "los lados del triangulo miden: " 
    + ladoTriangulo1 +(" cm,")
    + ladoTriangulo2 +(" cm, ")
    + baseTriangulo +("cm")
    );

const perimetroTriangulo= ladoTriangulo1+ ladoTriangulo2 +baseTriangulo;

console.log("El perimetro del triangulo es: " + perimetroTriangulo +(" cm"));

const areaTriangulo=(baseTriangulo*alturaTriangulo)/2;

console.log("El area del triangulo es: " + areaTriangulo +(" cm 2"));

console.groupEnd();

//Codigo del circulo
console.group("circulos");
const radioCirculo= 4;
const diametroCirculo = radioCirculo*2;
const pi= Math.PI;

console.log("pi es: " + pi ); 

const perimetroCirculo= diametroCirculo*pi;
console.log("el perimetro del circulo es: " + perimetroCirculo +(" cm "));

const areaCirculo=(radioCirculo*radioCirculo)*pi;
console.log("el area del circulo es: " + areaCirculo +(" cm 2"));

console.groupEnd();