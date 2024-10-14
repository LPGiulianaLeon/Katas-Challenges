//kata1

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

function solve(arr) {
    return arr.map(arr =>
        [...arr.toLowerCase()].reduce((count, char, i) =>
            char.charCodeAt(0) - 96 === i + 1 ? count + 1 : count
        , 0)
    );
}


//kata_6

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

function sortCards(array) {
    const order = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 'T', 'J', 'Q', 'K'];
    return array.sort((a, b) => order.indexOf(a) - order.indexOf(b));
}



//kata_10

function sortGrades(lst) {
    const order = ['VB', 'V0', 'V0+', 'V1', 'V2', 'V3', 'V4', 'V5', 'V6', 'V7', 'V8', 'V9', 'V10', 'V11', 'V12', 'V13', 'V14', 'V15', 'V16', 'V17'];
    return lst.sort((a, b) => order.indexOf(a) - order.indexOf(b));
}



//kata_11

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

function isItLetter(character) {
    const charCode = character.charCodeAt(0);
    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
        return true; 
    } else {
        return false; 
    }
}