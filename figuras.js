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