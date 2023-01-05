const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno){
    if(listaDeAlunosEMedias[0].includes(aluno)){
        const [alunos, medias] = listaDeAlunosEMedias;

        const indiceAlunoCadastrado = alunos.indexOf(aluno);
        const mediaDoAluno = medias[indiceAlunoCadastrado];

        console.log(`${aluno} tem a média ${mediaDoAluno}`);
    } else {
        console.log(`Aluno não encontrado!`);
    }
}

exibeNomeENota("Juliana");