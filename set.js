const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const meuSet = new Set(nomes);
const nomesAtualizados = [...meuSet];

/* Ou retirando a variável "meuSet e colocando direto da constante junto com o spread operation ([...algumaCoisa])"
    const nomesAtualizados = [...new Set(nomes)];
*/

console.log(nomesAtualizados);

/*  Faz o mesmo resultado de colocar os valores dentro de um array. Já que o comando "Set" o retorna com
separação de vírgulas.

    const novoArray = [];

    meuSet.forEach(set => {
        novoArray.push(set);
    });

    console.log(novoArray);
 */



