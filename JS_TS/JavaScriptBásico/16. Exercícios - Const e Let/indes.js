// dados da pessoa
let nome = "Luiz Otavio";
let sobrenome = "Miranda";
let idade = 30;
let anoNascimento;
let dataAtual = 2023;
let peso = 84;
const altura = 1.80;

// Calculo IMC
const imc = peso / (altura ** 2);

// Calculo ano de nascimento
const resultNascimento = dataAtual - idade;
anoNascimento = resultNascimento;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg tem ${altura} de altura e seu IMC é de ${imc}.
O ano de nascimento é ${anoNascimento}`)