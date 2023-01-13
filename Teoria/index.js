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