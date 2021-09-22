//CODIGO DE CUADRADO
console.group("Cuadrados");


function perimetroCuadrado(lado){
    return lado * 4;
}
//perimetroCuadrado(7);

function areaCuadrado(lado){
    return lado * lado;
}
//areaCuadrado(8);

console.groupEnd();


//CODIGO TRIANGULO
console.group("Triangulos");

function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
}
//perimetroTriangulo(4,7,8)

function areaTriangulo(base, altura){
    return (base * altura)/2;
}
//areaTriangulo(10,15)

console.groupEnd();


//CODIGO CIRCULO
console.group("Circulos");

function diametroCirculo(radio){
    return radio * 2;
}
//diametroCirculo(6)

//Pi
const PI = Math.PI
console.log("PI mide:" + PI + "cm");

//perimetro
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//perimetroCirculo(6)

//Area

function areaCirculo(radio){
    return(radio * radio) * PI;
}

// areaCirculo(6)

console.groupEnd();

// console.group("Triangulo Iscoceles");

// function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
//     if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
//         console.error("Los lados a y b no son iguales");
//     } else {
//         const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
//         const trianguloPequenoLadoBase = trianguloGrandeLadoA;

//         const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
//         const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

//         const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

//         const trianguloGrandeAltura = trianguloPequenoLadoA;
//         return trianguloGrandeAltura;
//     }
// }

// console.groupEnd();


//Funciones de HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetrocuad = perimetroCuadrado(value);
    alert(perimetrocuad);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const areacuad = areaCuadrado(value);
    alert(areacuad);
}

function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("Lado1Triangulo");
    const lado2 = document.getElementById("Lado2Triangulo");
    const base = document.getElementById("BaseTriangulo");
    const tlado1 = parseInt(lado1.value);
    const tlado2 = parseInt(lado2.value);
    const tbase = parseInt(base.value);
    const perimetro = perimetroTriangulo(tlado1, tlado2,tbase);
    document.getElementById(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}