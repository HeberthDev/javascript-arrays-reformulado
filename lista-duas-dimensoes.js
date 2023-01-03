/* 
    Consiste em um array dentro do outro ao qual você tem que colocar a posição referente aos arrays pais e filhos. Se atentando a posição de cada um no array em cima de seus respectivos vetores.
*/

const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

console.log(`A aluna da posição 1 da lista de alunos é: ${listaDeAlunosEMedias[0][1]}`);
console.log(`A nota dessa aluna é: ${listaDeAlunosEMedias[1][1]}`);