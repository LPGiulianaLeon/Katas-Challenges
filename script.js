//kata1
//Link del ejercicio: https://www.codewars.com/kata/55b42574ff091733d900002f
// Declaración del problema: Dado un array de nombres, devolver un nuevo array que contenga solo los nombres que tienen exactamente 4 letras.
function friend(friends){
    let output=[];
    for (let i=0; i < friends.length; i++) {
      if (friends[i].length === 4){
        output.push(friends[i])
      }
    }
    return output;
}
      

//kata2
//Link del ejercicio: https://www.codewars.com/kata/59cfc000aeb2844d16000075
// Declaración del problema: Dada una cadena de caracteres, devolver un array con dos cadenas: 
// una con letras en mayúsculas en posiciones pares y otra con las letras en mayúsculas en posiciones impares.

function capitalize(s){
    let indicePar = "";
    let indiceImpar = "";

    for(let i=0; i < s.length; i++){
        if(i % 2 === 0){
            indicePar += s[i].toUpperCase();
            indiceImpar += s[i];
        } else {
            indicePar += s[i];
            indiceImpar += s[i].toUpperCase();
        }
    }
    
    return [indicePar, indiceImpar];
};


//kata3
//Link del ejercicio: https://www.codewars.com/kata/57b9fc5b8f5813384a000aa3
// Declaración del problema: Dada una cadena que describe ganancias o pérdidas, calcular el total.

function calculate(string) {
    let signo = string.includes("gains") ? "gains" : "loses";

    let palabras = string.split(" ");
    let primerNumero = parseInt(palabras[2]);
    let segundoNumero = parseInt(palabras[palabras.length - 1]);

    if (signo === "gains"){
        return primerNumero + segundoNumero;
    } else {
        return primerNumero - segundoNumero;
    }
}


//kata_4
//Link del ejercicio: https://www.codewars.com/kata/586efc2dcf7be0f217000619
// Declaración del problema: Se da una cadena de caracteres como entrada. Completa la función que devuelve una lista de cadenas: (a) en el orden inverso de la cadena original y (b) con cada cadena sucesiva comenzando un carácter más allá del final de la cadena original.

function reverseSlice(str){
    let invertedString = nuevoArray(str);
    let listSlices = [];
    for(let i=0; i<invertedString.length; i++){
        let sliceActual = invertedString.slice(i);
        listSlices.push(sliceActual);
    }
    return listSlices;
}

function nuevoArray(str) {
    return str.split("").reverse().join("");
}
  

//kata_5
//Link del ejercicio: https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0
// Declaración del problema: Dada un array de cadenas, contar cuántas letras están en la posición correcta (1 para 'a', 2 para 'b', etc.).

function solve(arr) {
    return arr.map(arr =>
        [...arr.toLowerCase()].reduce((count, char, i) =>
            char.charCodeAt(0) - 96 === i + 1 ? count + 1 : count
        , 0)
    );
}


//kata_6
//Link del ejercicio: https://www.codewars.com/kata/59887207635904314100007b
// Declaración del problema: Dada una lista de números, encontrar el número más cercano a cero. 
//Devuelve Null si no es posible definir solo uno de esos valores.

function closest(arr) {
   
    let minAbs = Math.min(...arr.map(Math.abs));
    let candidates = arr.filter(num => Math.abs(num) === minAbs);
    if (candidates.length === 1) {
        return candidates[0];
    }

    let hasPositive = candidates.some(num => num > 0);
    let hasNegative = candidates.some(num => num < 0);

    if (hasPositive && hasNegative) {
        return null; 
    } else {
        return candidates[0]; 
    }
}


  
//kata_7
//Link del ejercicio: https://www.codewars.com/kata/589ebcb9926baae92e000001
// Declaración del problema: Dado un número en forma de cadena, convertir pares de números en caracteres ASCII.

function convert(number) {
    
    if (typeof number !== 'string') {
        return null;
    }
    if (number.length % 2 !== 0) {
        return null; 
    } 
    let result = ''; 
    for (let i = 0; i < number.length; i += 2) {
        let pair = number.slice(i, i + 2); 
        let asciiCode = parseInt(pair, 10);
        let char = String.fromCharCode(asciiCode);

        if ((asciiCode >= 65 && asciiCode <= 90) || asciiCode === 32) {
            result += char; 
        } else {
            continue;
        }
    }  
    return result; 
}

  

//kata_8
//Link del ejercicio: https://www.codewars.com/kata/558ee8415872565824000007
// Declaración del problema: Crear una función que verifique si el primer argumento n es divisible por todos los demás argumentos (devuelve verdadero si no hay otros argumentos)

function isDivisible(n, ...args) {
    if (args.length === 0) {
        return true;
    }
    for (let i = 0; i < args.length; i++) {
        if (n % args[i] !== 0) {
            return false; 
        }
    }
    return true;
}

  
//kata_9
//Link del ejercicio: https://www.codewars.com/kata/56f399b59821793533000683
// Declaración del problema: Escribir una función sort_cards() que ordene una lista barajada de cartas, de modo que cualquier lista de cartas dada se ordene por rango, sin importar la colección inicial.

function sortCards(array) {
    const order = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 'T', 'J', 'Q', 'K'];
    return array.sort((a, b) => order.indexOf(a) - order.indexOf(b));
}



//kata_10
//Link del ejercicio: https://www.codewars.com/kata/56f399b59821793533000683
// Declaración del problema: Dada una lista de grados (siendo VB el grado más fácil y V17 el más difícil), ordenarlos según su dificultad, del más fácil al más difícil.

function sortGrades(lst) {
    const order = ['VB', 'V0', 'V0+', 'V1', 'V2', 'V3', 'V4', 'V5', 'V6', 'V7', 'V8', 'V9', 'V10', 'V11', 'V12', 'V13', 'V14', 'V15', 'V16', 'V17'];
    return lst.sort((a, b) => order.indexOf(a) - order.indexOf(b));
}



//kata_11
//Link del ejercicio: https://www.codewars.com/kata/5a40c250c5e284a76400008c
// Declaración del problema: Al dejar caer una pelota desde una altura determinada, después de cada rebote, la pelota vuelve a una proporción fija de su altura anterior. Si la pelota rebota a una altura de 1 o menos, consideramos que ha dejado de rebotar. Devolver la cantidad de rebotes que tarda la pelota en dejar de moverse.

function bouncingBall(initial, proportion) {
    let bounces = 0;
    let height = initial; 
    while (height > 1) {
        height *= proportion;
        bounces++;
    }
    return bounces; 
} 

  
//kata_12
//Link del ejercicio: https://www.codewars.com/kata/57a06b07cf1fa58b2b000252
// Declaración del problema: Escribir una función, isItLetter, que nos diga si un carácter dado es una letra o no.

function isItLetter(character) {
    const charCode = character.charCodeAt(0);
    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
        return true; 
    } else {
        return false; 
    }
}