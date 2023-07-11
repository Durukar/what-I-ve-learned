let nome = prompt('Digite seu nome:')

document.body.innerHTML += `O seu nome é: ${nome} <br />`;
document.body.innerHTML += `O seu nome tem ${nome.length} letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome[1]} <br />`;
document.body.innerHTML += `O primeiro índice da letra 'a' no seu nome é: ${nome.indexOf('a', 0)} <br />`;
document.body.innerHTML += `O último índice da letra 'a' no seu nome é: ${nome.lastIndexOf('a')} <br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(-3)} <br />`;
document.body.innerHTML += `As letras do seu nome são : ${nome.split("")} <br />`
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()} <br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()} <br />`;