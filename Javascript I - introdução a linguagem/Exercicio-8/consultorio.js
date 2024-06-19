let fila = []

let opcao = ''

do {
let pacientes = ''
for (let i = 0; i < fila.length ; i++){
    pacientes += (i + 1) + "º - " + fila[i] + "\n"
}

opcao = prompt('Pacientes:\n' + pacientes +
'\nEscolha uma opção:\n1.Novo paciente\n2. Consultar paciente\n3.Encerrar sessão')

switch (opcao) {
case '1':
    let novoPaciente = prompt ('Insira o nome do paciente')
    fila.push (novoPaciente)
    break
case '2':
    let revmoverPaciente = fila.shift()
    if (revmoverPaciente) {
    alert(revmoverPaciente + ' foi removido!')
} else {
    alert('Não há pacientes para serem consultados')
}
    break
case '3':
    alert ('Saindo...')
    break
default:
    alert('Opcao inválida')

}

} while ( opcao !== '3')