//Codigo del cuadrado
console.group("Cuadrados");


function perimetroCuadrado(lado) { 
    return lado * 4;
}


function areaCuadrado(lado){  
    return lado * lado;
}

console.groupEnd();

//Codigo del triangulo
console.group("Triangulos");
const ladoTriangulo1= 6;
const ladoTriangulo2=6;
const baseTriangulo =4;
const alturaTriangulo=5.5;



function perimetroTriangulo(lado1, lado2, base){
    return lado1+lado2+base;

}



function areaTriangulo(base, altura){
    return (base*altura)/2;
}

function verificarIsoceles(base,lado1, lado2){
    if(lado1==lado2){
        if(base==lado1){
            return false;
        }
        else{
            return true;
        }
    }
    else{
        return false;
    }
}

function calcularAlturaTriangulo(base,lado1){
    return Math.sqrt((lado1*lado1)-(base*base));
}

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

function areaCirculo(radio){
    return (radio*radio)*pi;
}


console.groupEnd();

// interaccion con html

function calcularPerimetroCuadrado(){
    const input= document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro= perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input= document.getElementById("InputCuadrado");
    const value = input.value;

    const area= areaCuadrado(value);
    alert(area);

}

function calcularAlturaTrianguloIsosceles(){
   const milado1 =document.getElementById("Lado1").value;
   const milado2 =document.getElementById("Lado2").value;
   const mibase =document.getElementById("Base").value;
   if(!verificarIsoceles(mibase,milado1,milado2)){
       alert("No es un tiangulo isoceles");
   }
   else{
       const altura=calcularAlturaTriangulo(mibase/2,milado1)
        alert(altura);
   }
}