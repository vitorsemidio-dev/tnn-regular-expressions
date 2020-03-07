# Expressão Regular

## Link da Aula
* **Link da Playlist das aulas no YouTube: The Net Ninja - [Regular Expressions](https://www.youtube.com/playlist?list=PL4cUxeGkcC9g6m_6Sld9Q4jzqdqHd2HiD)**

## 1. Expressão Regular Simples com 1 match

Uma expressão regular deve vir entre barras: **/expressao-regular/**. Mas fazendo desta maneira, após encontrar o primeiro *match* irá parar de buscar pelo resto do texto a procura de novos casos que satisfaçam a RegEx. 

A expressão regular **/ninja/** aplicada ao texto *"Naruto é um ninja de Konoha. Seus amigos Sasuke e Sakura também são ninjas"* só iria encontrar o primeiro **ninja** que aparece na frase *"Naruto é um **ninja** de Konoha"*.

## 2. Aplicando a regra globalmente e case insensitive

Caso deseje considerar todas as ocorrências, devemos adicionar após o fechamento da **/** a letra **g**, que significa **global**. Dessa forma, a expressão regular **/ninja/g** irá detectar as duas ocorrências da palavra *ninja* no texto.

No entanto, como a expressão regular é case sensitive, então se houver a palavra *ninja* com algum caracter maiúsculo, não será detectada. Para resolver esse impasse, utilizamos a letra **i** após o fechamento da barra para indicar que desejamos aplicar uma RegEx **insensitive**.

Então se adicionarmos a seguinte frase *"Ninjas de Konoha antes de se tornarem Genin precisam frequentar a escola"* ao final da frase anterior, iremos conseguir fazer o match com **Ninjas** usando a expressão regular **/ninja/gi**.

## 3. Match um caracter

Se a gente desejar procurar duas palavras, ou parte delas, que possuam uma letra diferente na mesma posição. Nós podemos criar uma expressão para tentar Encontrar as duas. Por exemplo, na nossa frase *"Seus amigos Sasuke e Sakura também são ninjas"*, para fazer o match nos 4 primeiros caracteres dos nomes do personagens *Sasuke* e *Sakura* será necessário criar a seguinte RegEx: **/sa[sk]u/gi**. Entre os colchetes colocamos as possibilidades de caracteres naquela posição

## 4. Exclusão

Para criar uma RegEx que aceite todos exceto alguns com uma certa expressão. Por exemplo, queremos encontrar todos os casos que comecem com *ninja-*, seguido pelo nome do ninja onde o nome dele não comece com a letra **n**.

Para isso utilizamos uma lista, assim como foi no tópico 3. **[letras]**. No entanto, fazendo dessa maneira a gente **aceita** os caracteres que estão na lista. Para negá-los, devemos utilizar o caracter **^** no início da lista para indicar negação. Exemplo: **[^letras]**.

Então para a gente criar a RegEx para satisfazer o que foi dito no primeiro parágrafo deste tópico, devemos fazer assim: **/ninja-[^n]/gi**. Dessa maneira, no seguinte texto:

* Ninja-Naruto
* **Ninja-S**akura
* **Ninja-S**asuke

Ele dá match só nos dois últimos


## 5. Range

É possível também definir intervalos de caracteres. Se por acaso fosse necessário validar um nome onde a regra é que o primeiro caracter seja uma letra, e os demais podem ser qualquer coisa, não seria interessante criar uma lista e pôr todas as letras do alfabeto nele, assim: **[abcdefg]**.

Nesses casos podemos informar o intervalo que queremos pôr na lista, utilizando o hífen(**-**) para delimitar os extremos.

Então para aceitar todas as letras do alfabeto seria: **/[a-z]-nome/g**. No entanto, dessa maneira ele só consideraria a primeira letra minúscula. Para a gente fazer com que aceite ambos, ou adicionamos o **i** (insensitive) no final da expressão *(se optar por esta maneira, todos o texto será tratado dessa maneira, não só o primeiro caracter)* ou a gente adiciona o range das letras maiúsculas na lista, desta maneira: **/[a-zA-Z]-nome/g**

Os intervalos são definidos por nós. Se a gente quiser letras minúsculas de *a* até *j* e maiúsculas de *k* até *z* basta informar esses ranges na expressão regular.

## 6. Número de telefone

### 6.1

Utilizando intervalos, conseguimos também validar dígitos numéricos e criar uma regra para eles. Por exemplo, número de celular. O número deve ter 11 dígitos, onde cada um pode aceitar de 0 a 9. A Expressão Regular fica da seguinte forma: **/[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/**

### 6.2 Usando + e {num1, num2}

A expressão regular **/[0-9]+/** vai detectar qualquer sequência de dígitos como um match. 

Para definir a quantidade exata de dígitos que deseja é necessário pôr o número entre chaves após a regra que deseja ser repetido. Então fica **/[0-9]{11}/**. E caso deseje um intervalo entre *a* e *b*, podemos pôr os valores entre as chaves separado por vírgula **/[a-z]{5,10}/**. Se desejar um mínimo, sem existir um máximo, usa-se **/[a-z]{3,}/**

- A regEx **/[0-9]+/** na sequência numérica *0101010101001010101010* dá 1 match
- A regEx **/[0-9]{11}/** na sequência numérica *0101010101001010101010* dá 2 matches
- A regEx **/[a-z]{5,6}/** no texto *neji naruto sasuke sakura shikamaru* dá 4 matches
- A regEx **/[a-z]{7,}/** no texto *neji naruto sasuke sakura shikamaru* dá 1 match
