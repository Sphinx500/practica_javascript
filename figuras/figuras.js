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






//Funciones de HTML

//FUNCIONES DE CUADRADO
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetrocuad = perimetroCuadrado(value);
    ResultP =document.getElementById("ResultadoPCuadrado");
    ResultP.innerText="El Perimetro del Cuadrado es: " +perimetrocuad;
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const areacuad = areaCuadrado(value);
    ResultA = document.getElementById("ResultadoACuadrado");
    ResultA.innerText="El Area del Cuadrado es: " + areacuad;
}


//FUNCIONES DE TRIANGULO
function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("Lado1Triangulo");
    const lado2 = document.getElementById("Lado2Triangulo");
    const base = document.getElementById("BaseTriangulo");
    const tlado1 = parseInt(lado1.value);
    const tlado2 = parseInt(lado2.value);
    const tbase = parseInt(base.value);
    const perimetro = perimetroTriangulo(tlado1, tlado2,tbase);
    ResultP = document.getElementById("ResultadoPTriangulo");
    ResultP.innerText="El perimetro del triangulo es: " + perimetro;
}

function calcularAreaTriangulo(){
    const base = document.getElementById("BaseATriangulo");
    const altura = document.getElementById("AlturaTriangulo");
    const tbase = parseInt(base.value);
    const taltura = parseInt(altura.value);
    const area = areaTriangulo(tbase, taltura);
    ResultA = document.getElementById("ResultadoATriangulo");
    ResultA.innerText="El area del trangulo es: " + area;
}

//FUNCIONES DE CIRCULO

function calcularPerimetroCirculo(){
    const radio = document.getElementById("InputCirculo");
    const cradio =parseInt(radio.value);
    perimetro = perimetroCirculo(cradio);
    ResultP =document.getElementById("ResultadoPCirculo");
    ResultP.innerText="El Perimetro del Cuadrado es: " + perimetro;
}

function calcularAreaCirculo(){
    const radio = document.getElementById("InputCirculo");
    const cradio =parseInt(radio.value);
    area = areaCirculo(cradio);
    ResultP =document.getElementById("ResultadoACirculo");
    ResultP.innerText="El Area del Cuadrado es: " + area;
}