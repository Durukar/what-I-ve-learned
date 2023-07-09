---
title: doc_Construtores
tags: [Import-c91f]
created: '2023-07-08T22:35:36.364Z'
modified: '2023-07-08T22:41:41.466Z'
---

<h1>Construtor

* É uma operação especial da classe, que executa no momento da instanciação do objeto.
* Usos comuns:
  * Iniciar valores dos atributos
  * Permitir ou obrigar que o objeto receba dados / dependências no momento de sua instanciação (injenção de dependência)
* Se um construtor customizado não for especificado, a classe disponibiliza o construto padrão:
  Product p = new Product();
* É possivel especificar mais de um construtor na mesma classe (sobrecarga)

<h1>Problema exemplo

![1688848038944](image/doc_Construtores/1688848038944.png)

<h1>Proposta de melhoria

Quando executamos o comando abaixo, instanciamos um produto **"product"** com seus atributos ''Vazios''":

product = new Product(); ![1688848281874](image/doc_Construtores/1688848281874.png)


Entretanto, faz sentido um produto que não tem nome? Faz sentido um produto que não tem preço?


Com o intuito de evitar a existência de produtos sem nome e sem preço, é possível fazer com que seja "obrigatória" a iniciação desses valores?

<h2>Apos modificado

![1688849273731](image/doc_Construtores/1688849273731.png)
