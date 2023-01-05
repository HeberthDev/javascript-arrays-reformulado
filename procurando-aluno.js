const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno){
    if(listaDeAlunosEMedias[0].includes(aluno)){
        const indiceAlunoCadastrado = listaDeAlunosEMedias[0].indexOf(aluno);
        const mediaDoAluno = listaDeAlunosEMedias[1][indiceAlunoCadastrado];

        console.log(`${aluno} tem a média ${mediaDoAluno}`);
    } else {
        console.log(`Aluno não encontrado!`);
    }
}

exibeNomeENota("Juliana");