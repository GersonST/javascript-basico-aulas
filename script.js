//Variaveis

// var a;
// a = "Placa de Captura";
// console.log(a + " Ell Gato");
// alert('Sei la ahhauhauh')


//Tipos de Dados

// Boolean
// null
// undefined
// Number
// String
// var b = 22;
// var a = 1;

// console.log(a);
// console.log(b);

// console.log(a + b)


// /* + Adição
//    -Subtração
//    *Multiplicação
//    /Divisão
//    %Módulo
//    ++Incremento
//    --Decremento */

//    var a = 10;
//    var b = 15;

//     // Soma
//    var c = a + b;

//    console.log(c);

// //    Subtração
//    var c = a - b;

//    console.log(c);


// //    Multiplicação
//    var c = a * b;

//    console.log(c);

// //    Divisão
//    var c = a / b;

//    console.log(c);

// //    Módulo (Resto da divisão)

//    var c = b % a;

//    console.log(c);


// // Incremento
//    var c = ++a;

//    console.log(c);

//    //    Decremento

//    var c = --a;

//    console.log(c);


/* Atribuições*/


// var a = 30;

// a += 2;

// console.log(a);


// var idade = 77;

// if (idade >= 18 && idade <=70) {
//     console.log("Pode");
//     console.log("Qual o seu pedido?");
// }

// else {
//     console.log("Não pode");
// }


// var numero = Math.random() * 100;

// var numero = 5;

// while (numero < 50) {
//     console.log("Número " + numero)
//     var numero = Math.random() * 100;
// }
// console.log("Número " + numero)
// console.log("Acabou!");


/* Array */


// var alunos = ["Gerson", "Igor", "Marcia", "Alberta"]


// for (var i = 0; i < alunos.length; i++) {
//     console.log(alunos[i])
// }


// var alunos = ["Gerson", "Igor", "Marcia", "Alberta"]


// for (var aluno of alunos) {
//     console.log(aluno)
// }


/* Funções */



function media(n1,n2)
{

var nota1 = n1;
var nota2 = n2;
var media = (nota1 + nota2)/2;
// console.log(media);

    return media;
}

var resultado1 = media(6,7);
var resultado2 = media(8,7);

console.log(resultado1 + " e " + resultado2);