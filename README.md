# Expressão Regular

## 1. Expressão Regular Simples com 1 match

Uma expressão regular deve vir entre barras: **/expressao-regular/**. Mas fazendo desta maneira, após encontrar o primeiro *match* irá parar de buscar pelo resto do texto a procura de novos casos que satisfaçam a RegEx. 

A expressão regular **/ninja/** aplicada ao texto *"Naruto é um ninja de Konoha. Seus amigos Sasuke e Sakura também são ninjas"* só iria encontrar o primeiro **ninja** que aparece na frase *"Naruto é um **ninja** de Konoha"*.

## 2. Aplicando a regra globalmente e case insensitive

Caso deseje considerar todas as ocorrências, devemos adicionar após o fechamento da **/** a letra **g**, que significa **global**. Dessa forma, a expressão regular **/ninja/g** irá detectar as duas ocorrências da palavra *ninja* no texto.

No entanto, como a expressão regular é case sensitive, então se houver a palavra *ninja* com algum caracter maiúsculo, não será detectada. Para resolver esse impasse, utilizamos a letra **i** após o fechamento da barra para indicar que desejamos aplicar uma RegEx **insensitive**.

Então se adicionarmos a seguinte frase *"Ninjas de Konoha antes de se tornarem Genin precisam frequentar a escola"* ao final da frase anterior, iremos conseguir fazer o match com **Ninjas** usando a expressão regular **/ninja/gi**.

## 3. Match um caracter

Se a gente desejar procurar duas palavras, ou parte delas, que possuam uma letra diferente na mesma posição. Nós podemos criar uma expressão para tentar Encontrar as duas. Por exemplo, na nossa frase *"Seus amigos Sasuke e Sakura também são ninjas"*, para fazer o match nos 4 primeiros caracteres dos nomes do personagens *Sasuke* e *Sakura* será necessário criar a seguinte RegEx: **/sa[sk]u/gi**. Entre os colchetes colocamos as possibilidades de caracteres naquela posição
