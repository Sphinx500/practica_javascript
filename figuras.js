//CODIGO DE RECTANGULO
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden:" + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4

console.log("El perimetro del cuadrado es:" + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado

console.log("El area del cuadrado es:" + areaCuadrado + "cm2");
console.groupEnd();


//CODIGO TRIANGULO
console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;


console.log(
    "Los lados del triangulo miden:"
    + ladoTriangulo1
    + "cm "
    + ladoTriangulo2
    + "cm "
    + baseTriangulo
    + "cm ");

const alturaTriangulo = 5.5;
console.log("La altura del triangulo mide:" + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es:" + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo es:" + areaTriangulo + "cm2");

console.groupEnd();


//CODIGO CIRCULO
console.group("Circulos");

//radio
const radioCirculo = 4;
console.log("El radio del circulo mide:" + radioCirculo + "cm");
//diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo mide:" + diametroCirculo + "cm");
//Pi
const PI = Math.PI
console.log("PI mide:" + PI + "cm");
//Circunferencia
const perimetroCirculo = diametroCirculo * PI
console.log("La circunferencia del circulo mide:" + perimetroCirculo + "cm");
//Area
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo mide:" + areaCirculo + "cm");

console.groupEnd();