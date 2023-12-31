function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max-min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) =>{
    if(typeof msg !== 'string' ) reject(new Error('ERRO'))
    setTimeout(()=> {
      resolve(msg);
    }, tempo);
  });
}

esperaAi('Conexão com o BD', rand(1,3))
  .then(resposta => {
    console.log(resposta);
    return esperaAi('Buscando dados da Base', rand(1,3));
  })
  .then(resposta =>{
    console.log(resposta)
    return esperaAi(2222, rand(1,3))
  })
  .then(() =>{
    console.log('Exibe dados na tela')
  })
  .catch(err => {
    console.log('ERRO: ', err)
  });

  console.log('Isso aqui será exibido antes de qualquer promisse.')