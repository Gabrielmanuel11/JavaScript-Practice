const turista = prompt ('E aí, turista, qual é seu nome?')

let cidades = ''
let contagem = 0

let continuar = prompt ('Você já visitou alguma cidade? Sim/Não')

while (continuar === 'Sim') {
let cidade = prompt ('Qual foi a cidade?')
cidades += '-' + cidade + '\n'
contagem++
continuar = prompt('Você visitou alguma outra cidade? Sim/Não')
}

alert (
    'Turista: ' + turista +
    '\nQuantidade de cidade visitadas: ' + contagem +
    '\nCidades visitadas: ' + cidades
)

