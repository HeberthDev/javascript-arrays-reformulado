/* 
    Splice - se baseia em eliminação de uma parte de um array, ao qual é constituído de dois parâmetros, o primeiro é em relação ao índice do primeiro elemento para exclusão e o segundo é referente à quantidade de elementos, à partir do elemento inicial dado no primeiro parâmetro, será(ão) retirado(s).

    Push - Joga valores dados como parâmetro, dentro do array, sempre no final da "fila".
*/
const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

// Retira os elementos informados e coloca "Rodrigo" no lugar
nomes.splice(1, 2, "Rodrigo");

console.log(nomes);