const listadecompras = []

listadecompras [0] = 'Batata'
listadecompras [1] = 'Feijão'
listadecompras [2] = 'Arroz'
listadecompras [3] = 'Açucar'
listadecompras [4] = 'Refrigerante'

console.log(listadecompras[2])

//Adiciona elementos no final do array
listadecompras.push('Banana')
console.log(listadecompras)

//Adiciona elementos no começo do array
listadecompras.unshift('Tomate')
console.log(listadecompras)

//Remove elementos no final do array
listadecompras.pop()

//Remove elementos no começo do array
listadecompras.shift()

//Pesquisar elementos no array
const inclui = listadecompras.includes('Arroz')
console.log(inclui)

//Saber posição no array
const indice = listadecompras.indexOf('Arroz')
console.log (indice)

//Cortar e copiar array
const copiar = listadecompras.slice(0,2)
console.log(copiar)

//Concatenar array
const comprasjuntas = copiar.concat(listadecompras,'Abacate', 'Pepino')
console.log (comprasjuntas)

//Substituir elementos do array
const elementorRemovido = listadecompras.splice(indice, 1, 'Beterraba', 'Chuchu')
console.log (elementorRemovido)

//Iterar sobre os elementos
for (let i = 0; i < listadecompras.length; i++) {
    const comida = listadecompras[i]
    console.log (comida + " se encontra na posição " + i)
}