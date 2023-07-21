fetch('http://localhost:8080/games')
  .then(response => response.json())
  .then(json => carregaElementos(json));

function carregaElementos(json) {
  const table = document.createElement('table');
  for(let game of json) {
    const tr = document.createElement('tr');
    let td = document.createElement('td');
    td.innerHTML = game.title
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = game.year;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = game.shortDescription
    tr.appendChild(td);

    table.appendChild(tr);
    console.log(game.imgUrl);
  }

  const resultado = document.querySelector('.resultado');
  resultado.appendChild(table);
}