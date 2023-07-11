const nome = 'Luiz'; // string
const nome1 = "Luiz"; // String
const nome2 = `Luiz`; // String
const num1 = 10; // number
const num2 = 10.52; // number
let nomeAluno; // Undefined = não aponta para local nenhum na mémoria
let sobrenomeAluno = null; // Nulo -> Não aponta pra local nenhuma na memória.
const boolean = false; // Pode-se usar true tbm (lógico).

let a = [1,2];
let b = a;
b.push(3);
console.log(a, b);

a = 3;
console.log(a, b); // 3, 2