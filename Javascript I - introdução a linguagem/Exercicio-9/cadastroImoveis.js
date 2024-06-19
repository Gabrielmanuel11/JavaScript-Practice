let imoveis = []

let opcao = ''

do { 

    opcao = prompt( 'Total de imóveis cadastrados: ' + imoveis.length +
    '\n1. Cadastrar Imóvel\n2. Mostrar Imóveis cadastrados\n3. Sair'
)

switch (opcao) {
case '1':
    const imovel = {}

    imovel.nome = prompt ('Qual é seu nome?')
    imovel.quartos = prompt ('Qual é a quantidade de quartos?')
    imovel.banheiro = prompt ('Qual é a quantidade de banheiros?')
    imovel.garagem = prompt ('Possui garagem? Sim/Não')

    const confirmacao = confirm ('Salvar este imóvel?'+
    '\n\nProprietário: ' + imovel.nome + 
    '\nQuartos: ' + imovel.quartos +
    '\nBanheiros: ' + imovel.banheiro +
    '\nGaragem: ' + imovel.garagem) 

    if (confirmacao) {
        imoveis.push(imovel)
        alert ('Imóvel salvo com sucesso')
    } else {
        alert('Voltando ao menu')
    }
    break
    
case '2':
    for (let i = 0; i < imoveis.length ; i++){
        alert(
            'Imóvel: ' + (i + 1) +
            '\nProprietário: ' + imoveis[i].nome +
            '\nQuartos: ' + imoveis[i].quartos +
            '\nBanheiro: ' + imoveis[i].banheiro +
            '\nGaragem: ' + imoveis[i].garagem
        )
    }
    break
case '3':
    alert('Encerrando')
    break
default:
    alert('Opção inválida')

}

} while (opcao != '3')