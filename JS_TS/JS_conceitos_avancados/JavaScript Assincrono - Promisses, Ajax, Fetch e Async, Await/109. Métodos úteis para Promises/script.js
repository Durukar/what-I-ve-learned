function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max-min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) =>{
    if(typeof msg !== 'string' ) {
      reject(false)
      return;
    }
    setTimeout(()=> {
      resolve(msg.toUpperCase() + ' - Passei  na promise');
    }, tempo);
  });
}

// Promise.all Promise.race Promise.resolve Promise.reject
const promisesArray = [
  'Primeiro valor',
  esperaAi('Promisse 1', 3000),
  esperaAi('Promisse 2', 500),
  esperaAi('Promisse 1', 1000),
  esperaAi(1000, 1000),
  'Outro valor'
];

Promise.all(promisesArray)
  .then(function(valor){
    console.log(valor);
  })
  .catch(function(err){
    console.log(err);
  });