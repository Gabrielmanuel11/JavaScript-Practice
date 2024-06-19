function Ola () {
    console.log('Olá mundo')
}

Ola ()


//Função com Parâmetro
function dobro (x = 2) {
    alert('O dobro do número ' + x + ' é ' + (x*2))
}

dobro ()

//Retorno da Função
function media (a,b){
const numero = (a + b) / 2
return numero

}

let resultado = media (5,9)
console.log(resultado)

//Utilizar com objeto
function crearProduto (nome,preco){
    const produto = {
    nome, // nome: nome
    preco, // preco: preco
    estoque : 1
}
    return produto
}

let novoProduto = crearProduto ('Bolacha',10)

console.log(novoProduto)

//Função dentro de função
function areaRetangular (base, altura){
   return base * altura
    
}

function areaQuadrada(lado) {
    return areaRetangular (lado, lado)
}

//console.log (areaRetangular(4, 5))
console.log(areaQuadrada(5))

//As funções terminam no 'return' a menos que tenha uma ramificação
function maioridade (idade){
    if (idade>18){
        return 'Maior de idade'
    } else {
        return 'Menor idade'
    }

}

console.log (maioridade(23))
console.log (maioridade(16))