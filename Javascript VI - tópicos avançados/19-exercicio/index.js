function imc (weight, hight){
    return new Promise((resolve, reject) =>{
        if(typeof weight !== 'number' || typeof hight !== 'number'){
            reject('arguments must be numbers')
        } else {
            resolve(weight / (hight * hight))
        }
    })
}

function showImc (weight, hight){
    imc(weight, hight).then((result) => {
        console.log(`O seu IMC é ${result}`)
    
    
    if(result < 18.5) {console.log('Magreza')} 
    else if(result < 25) {console.log('Normal')} 
    else if(result < 30) {console.log('Sobrepeso')}
    else if(result < 40) {console.log('Obesidade')}
    else {console.log('Obesidade grave')}
}).catch((err)=>{console.log(err)})

    console.log("Calculando...")
}

showImc(110, 1.85);