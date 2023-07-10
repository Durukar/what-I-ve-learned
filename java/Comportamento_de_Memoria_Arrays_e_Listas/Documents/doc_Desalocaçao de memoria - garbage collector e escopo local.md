<h1> Garbage Collector

* É um processo que automatiza o gerenciamento de memória de um programa em execução.
* O Garbage collector monitora os objetos alocados dinamicamente pelo program a(no heap), desalocando aqueles que não estão mais sendo utilizados.

![1688919675559](image/doc_Desalocaçaodememoria-garbagecollectoreescopolocal/1688919675559.png)

<h1> Desalocação por escopo

![1688919772141](image/doc_Desalocaçaodememoria-garbagecollectoreescopolocal/1688919772141.png)

**Outro exemplo:**

![1688919926280](image/doc_Desalocaçaodememoria-garbagecollectoreescopolocal/1688919926280.png)

<h2> Resumo

* Objetos alocados dinamicamente, quando não possuem mais referência, serão desalocados pelo garbage collector.
* Variáveis locais são sesalocadas imediatamente assim que seu escopo local sai de execução.
