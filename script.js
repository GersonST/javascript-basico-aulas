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



// function media(n1,n2)
// {

// var nota1 = n1;
// var nota2 = n2;
// var media = (nota1 + nota2)/2;
// // console.log(media);

//     return media;
// }

// var resultado1 = media(6,7);
// var resultado2 = media(8,7);

// console.log(resultado1 + " e " + resultado2);


// function saudacao() {

//     return "Olá mundo!"
// }


// var s = saudacao();

// console.log(s)



// var media = function (n1,n2) {

//     return (n1 + n2)/2;
// }

// console.log(media(5,6));


/* Resolução de Desafio */


// var nomes = ["Igor", "José", "Maria"];
// var notasA = [7.0, 6.5, 9.5];
// var notasB = [8.0, 7.0, 8.5];


// function media(n1, n2) {

//     return (n1 + n2) / 2
// }


// function passou(media) {


//     if(media > 7) {
//         return "Aprovado";
//     }else{
//         return "Reprovado";
//     }

// }

// for (var index in nomes) {

//     var nota1 = notasA[index];
//     var nota2 = notasB[index];
//     var m = media(nota1, nota2);

//     console.log(nomes[index] +
//         " - " +
//         nota1 +
//         " - " +
//         nota2 +
//         " - " +
//         m +
//         " - " + passou(m));

// }

/* Objetos */



// function calcMedia () {
//     return (this.notas[0] + this.notas[1]) /2
// }


// var aluno = { nome: "Igor", notas:[7,8],

// media: calcMedia

// };



// var aluno1 = { nome: "João", notas:[6,8],

// media: calcMedia

// };


// console.log(aluno.nome)
// console.log(aluno.media())

// console.log(aluno1.nome)
// console.log(aluno1.media())



/* Objetos Construtores */

// var calcMedia = function () {
//     return (this.nota1 + this.nota2) / 2
// }



// function criarAluno(nome, n1, n2) {
//     return {
//         nome: nome, 
//         nota1: n1, 
//         nota2: n2, 
//         media: calcMedia
//     }
// }

// var turma = [
//     criarAluno("Igor", 9, 6),
//     criarAluno("Gerson", 8, 7),
// ];


// var aluno = turma[1];



// for (var aluno of turma) {
//     console.log(aluno.nome + " - " + aluno.media());
// }

/* Datas */


// var d = new Date(0);

// console.log(d);


/* Const, Let e Var */

var numero1 = 4;
let numero2 = 5;
const numero3 = 6;

console.log(numero1)
console.log(numero2)
console.log(numero3)