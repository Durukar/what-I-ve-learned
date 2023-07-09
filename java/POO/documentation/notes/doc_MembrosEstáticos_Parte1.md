---
title: doc_MembrosEstáticos_Parte1
tags: [Import-c91f]
created: '2023-07-08T22:35:36.364Z'
modified: '2023-07-08T22:41:41.490Z'
---

<h1>Membros estáticos

* Também chamados membros de classe
  * Em oposição a membros e instância
* São membros que fazem sentido independentemente de objetos. Não precisam de objeto para serem chamados. São chamados a partir do próprio nome da classe.
* Aplicação comuns:
  * Classe utilitárias
  * Declaração de constantes
* Uma classe que possui somente moembros estático, pode ser uma classe estática também. Esta classe não poderá ser instanciada.

<h2>Problema exemplo

Fazer um progama para ler um valor numérico qualquer, e dai mostrar quanto seria o valor de uma circunferência e do volume de uma esfera para um raio daquele valor. Informar também o valor de PI com duas casas decimais.

![1688815422493](image/doc_MembrosEstáticos/1688815422493.png)

<h3>Checklist

* Versão 1: métodos na própria classe do programa
  * Nota: dentro de um método estático você não pode chamar membros de instância da mesma classe.
* Versão 2: classe Calculator com membros de instância
* Versão 3: classe Calculator com método estático


<h2>Versão 1

![1688816361144](image/doc_MembrosEstáticos/1688816361144.png)

<h1>Versão 2

![1688816705456](image/doc_MembrosEstáticos/1688816705456.png)

![1688816729409](image/doc_MembrosEstáticos/1688816729409.png)
