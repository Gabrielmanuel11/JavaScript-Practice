const carro1 = prompt ("Escolha seu primeiro carro")
const vel1 = parseFloat(prompt ('Qual é a velocidade dele?'))
const carro2 = prompt ('Escolha o segundo carro')
const vel2 = parseFloat(prompt ('Qual é a velocidade dele?'))

if (vel1 > vel2) {
    alert(carro1 + " é mais rápido que " + carro2)
} else if (vel2 > vel1) {
    alert (carro2 + ' é mais rápido que ' + carro1)
} else {
    alert(carro1 + ' e ' + carro2 + ' tem a mesma velocidade')
}






