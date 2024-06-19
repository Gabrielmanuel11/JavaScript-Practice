class Idioma {
    falar(){
        console.log('Iniciando conversa')
    }
}

class Português extends Idioma {
    falar(){
        console.log(`Você está falando português`)
    }
}

class Espanhol extends Idioma {
    falar(nome){
        console.log(`Você está falando espanhol com ${nome}`)
    }
}

class Ingles extends Idioma {
    falar(nome){
        console.log(`Você está falando inglês com ${nome}`)
    }
}

const idioma = new Idioma ()
const português = new Português ()
const espanhol = new Espanhol ()
const ingles = new Ingles ()

idioma.falar()
português.falar()
espanhol.falar('Jaqueline')
ingles.falar('Roberto')
