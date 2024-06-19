let saldo =  parseFloat( prompt ('Qual é seu saldo inicial?'))

let opcao = ''

do {
    opcao = prompt (
        'Saldo atual: ' + saldo +
        '\n1. Adicionar dinheiro'+
        '\n2. Remover dinheiro'+
        '\n3. Sair da operação'
    )

switch (opcao) {
case "1":
    saldo += parseFloat (prompt('Insira o valor recebido'))
    break
case '2':
    saldo -= prompt('Insira o valor retirado')
    break
case '3':
    alert('saindo...')
    break
    default:
        alert('Entrada inválida')

}

} while (opcao !== '3')