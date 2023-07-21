fetch('index1.html')
  .then(response => {
    if(response.status !== 200) throw new Error('ERRO 404 NOSSO!');
    return response.text();
  })
  .then(html => console.log(html))
  .catch(err => console.error(err));