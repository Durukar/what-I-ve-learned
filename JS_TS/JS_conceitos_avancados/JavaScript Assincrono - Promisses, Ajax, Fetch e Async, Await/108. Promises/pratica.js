function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max-min) + min);
}

function sum (x, y) {
  return new Promise((resolve, reject) =>{
    if(typeof x == 'number' && typeof y == 'number') resolve(x + y)
    reject(new Error('Erro'))
  }) 
}

sum(1, 2)
  .then(resposta => {
    console.log(resposta)
  })
  .catch(err => {
    console.log('Não é um numero.',  err)
  });