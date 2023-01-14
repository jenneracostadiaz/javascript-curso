console.log('Hola Mundo');

/** Asignación de valores */
let variable = "La respuesta es"; //Valor que va a cambiar
let numb = 5; //Valor no cambia
const operacion = numb + numb; //Valor no cambia

/** Operadores Aritméticos */
let suma = numb + numb;
let resta = numb - numb;
let multiplicacion = numb * numb;
let divicion = numb / numb;
let potencia = Math.pow(numb, 2);
let modulo = numb % numb;

console.log(variable + " " + potencia);

/** Condicional if */
if(numb == 5){
    console.log('Si es 5');
} else {
    console.log('No es 5');
}
if(numb%2 == 0){
    console.log('Es número par');
} else {
    console.log('Es número impar');
}

/** Bucles */
while(numb < 7){
    numb++;
    console.log(numb);
}

for (let i = 0; i < numb; i++) {
    console.log(i);
}

/** Funciones */
function cafetera(ing1, ing2){
    if(ing1=='agua' && ing2=='cafe'){
        return 'americano'
    }
    if(ing1=='leche' && ing2=='cafe'){
        return 'capuchino'
    }
}

var tasa = cafetera('leche', 'cafe');
console.log(tasa);

/** DOM */
const txtn1 = document.querySelector('#n1');
const txtn2 = document.querySelector('#n2');
const respuesta = document.querySelector('#resp');
const btncalcular = document.querySelector('#calcular');
btncalcular.addEventListener('click', calcular);



function calcular(){
    const op1 = parseFloat( txtn1.value );
    const op2 = parseFloat( txtn2.value );
    let resp = op1+op2;
    respuesta.innerText = resp;
    respuesta.style = "color:blue";
}

/** Arrays */
const arryResp = document.querySelector('#arryResp');
const btnejecutar = document.querySelector('#ejecutar');
btnejecutar.addEventListener('click', miArray);

let frutas = ["manzana", "mango", "fresa"]

function miArray(){
    arryResp.innerText = frutas.length //Contar
    arryResp.innerText = frutas[1] //Seleccionar uno
    arryResp.innerText = frutas[frutas.length-1] //Seleccionar el último
    /** Recorrer un Array */
    frutas.forEach((item, index, array) => {
        arryResp.innerText = array;
    });
}

/** Fetch */
/*
const obtenerData = async () => {
    const responseAPI = await fetch("https://api.github.com/repositories/19438/commits")
    const json = await responseAPI.text();
    console.log(JSON.parse(json));
}
*/

const obtenerData = async () =>{
    await fetch("https://api.github.com/repositories/19438/commits")
    .then(response=>response.json())
    .then(json=>console.log(json))
    .catch(error=>console.log('Solicitud fallido', error))
}
obtenerData();