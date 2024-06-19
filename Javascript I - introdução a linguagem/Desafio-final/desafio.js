const vagas = []

function listarVagas (){
    const vagaEmTexto = vagas.reduce (function(textofinal, vaga, indice){
        textofinal += (indice + 1) + '. '
        textofinal += vaga.nome
        textofinal += " (" + vaga.candidatos.length + ' candidatos)\n'

    }, '')

    alert (vagaEmTexto)
}

function criarVaga (){
    const nome = prompt('Informe o nome da vaga')
    const descricao = prompt ('Descreva a posição')
    const dataLimite = prompt ('Descreva a data limite da vaga. (dd/mm/aaaa)')

    const confirmacao = confirm ('Confirme se as informações abaixo estão corretas\n\n' +
    'Nome: ' + nome +
    '\nDescrição: ' + descricao +
    '\nData limite: ' + dataLimite)

    if (confirmacao){
        const criarVaga = {nome, descricao, dataLimite, candidatos: []}
        vagas.push(criarVaga)
        alert('Vaga criada com sucesso')
    }
}

function verVaga (){
    const indice = prompt ('Insira o indice da vaga que você quer ver')
    const vaga = vagas[indice]

    const candidatosEmtexto = vaga.candidatos.reduce(function (textofinal, candidato){
        return textofinal + '\n - ' + candidato 
    }, "")

    alert(
        'Nº ' + indice +
        '\nNome: ' + vaga.nome +
        '\nDescrição: ' + vaga.descricao +
        '\nData limite: ' + vaga.dataLimite +
        '\nQuantidade de candidatos: ' + vaga.candidatos.length +
        '\nNome dos candidatos: ' + candidatosEmtexto
    )
}

function inscreverCandidato (){
    const nome = prompt ('Insira o nome do candidato:')
    const indice = prompt ('Insira o indice da vaga desejada:')
    const vaga = vagas[indice]

    const confirmacao = confirm ('Deseja inscrever candidato ' + nome + ' na vaga '+indice+ '?' +
    '\nNome: ' + vaga.nome + '\nDescrição: '+ vaga.descricao + '\nData Limite: ' + vagas[indice].dataLimite)

    if (confirmacao) {
        vaga.candidatos.push(nome)
        alert('Inscrição realizada')
    }
}

function excluirVaga () {
    const indice = prompt ('Insira o indice da vaga que quer excluir')
    const vaga = vagas[indice]

    const confirmacao = confirm ('Deseja excluir a vaga '+ indice + '?'+
    '\nNome: ' + vaga.nome + '\nDescrição: '+ vaga.descricao + '\nData Limite: ' + vagas[indice].dataLimite)
    if (confirmacao){
        vagas.splice(indice, 1)
        alert('Vaga excluída com sucesso')
    }
}

function exibirMenu (){
    const opcao = prompt (
        
    )

}