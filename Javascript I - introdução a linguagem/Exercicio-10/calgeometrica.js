
function areaTriangulo (){
    const base = prompt('Informe a base: ')
    const altura = prompt('Informe a altura: ')
    return base * altura / 2 
}

function areaRetangulo (){
   const  base = prompt('Informe a base: ')
    const altura = prompt('Informe a altura: ')
    return base * altura
}

function areaQuadrado (){
    const lado = prompt('Informe o lado: ')
    return lado * lado
}

function areaTrapezio (){
    const baseMaior = parseFloat( prompt('Informe a base maior: '))
    const baseMenor = parseFloat( prompt('Informe a base menor: '))
    const altura = prompt('Informe a altura: ')
    return (baseMaior + baseMenor) * altura / 2
}

function areaCirculo (){
   const raio = prompt('Informe o raio: ')
    return raio * 3,14
}

function exibirmenu(){
    return prompt(
        'Escolha as opções abaixo' +
        '\n\n'+
        '1. Calcular a área do Triângulo'+
        '\n2. Calcular a área do Retângulo' +
        '\n3. Calcular a área do Quadrado' +
        '\n4. Calcular a área do Trapézio' +
        '\n5. Calcular a área do Círculo' +
        '\n6. Sair' 
        )
}

function executar(){
    let opcao = ''

    do {
        opcao = exibirmenu()
        let resultado = ''

        switch(opcao){
            case '1':
                resultado = areaTriangulo ()
                break
            case '2':
                resultado = areaRetangulo()
                break
            case '3':
                resultado = areaQuadrado()
                break
            case '4':
                resultado = areaTrapezio()
                break
            case '5':
                resultado = areaCirculo()
                break
            case '6':
                alert('Saindo...')
                break
                default:
                    alert('Opção inválida')
        }
        
        alert('Resultado: '+ resultado)

    } while (opcao !== '6')
}

executar()