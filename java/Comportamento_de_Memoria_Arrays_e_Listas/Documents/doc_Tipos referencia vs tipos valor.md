<h1> Classes são tipos referência

Variáveis cujo tipo são classes não devem ser entendidas como caixas, mas sim "tentátucos" (ponteiros) para caixas

![1688867562350](image/doc_Tiposreferenciavstiposvalor/1688867562350.png)

<h1> Valor "null"

Tipos referência aceitam o valor "null", que indica que a variável aponta pra ninguém.

![1688867760420](image/doc_Tiposreferenciavstiposvalor/1688867760420.png)

<h1> Tipos primitivos são tipos valor

Em Java, tipos primitivos são tipos valor. Tipos valor são CAIXAS e não ponteiros.

![1688867860282](image/doc_Tiposreferenciavstiposvalor/1688867860282.png)

![1688867895505](image/doc_Tiposreferenciavstiposvalor/1688867895505.png)

<h1> Tipos primitivos e inicialização

* Demo:

```java
intp p;
System.out.println(p); // erro: variável não iniciada

p = 10;
System.out.println(p);
```


<h1> Valores padrão

* Quando alocamos (new) qualquer tipo estruturado (classe ou array), são atribuídos valores padrão aos seus elementos.
  * número: 0
  * boolean: false
  * char: caractere código 0
  * objeto: null

![1688868136430](image/doc_Tiposreferenciavstiposvalor/1688868136430.png)


<h1> Tipos referência vs. Tipos valor

![1688868220750](image/doc_Tiposreferenciavstiposvalor/1688868220750.png)
