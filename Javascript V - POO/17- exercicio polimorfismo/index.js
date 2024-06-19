class Character {
    constructor(nome, vida, ataque, defesa){
        this.nome = nome
        this.vida = vida
        this.ataque = ataque
        this.defesa = defesa
    }


    atacar(personagem){
        if(this.ataque < personagem.defesa){
            console.log(`Você não tem poder de ataque contra ${personagem}`)
        } else{
            personagem.vida -= this.ataque - personagem.defesa
        } 
        if(this.vida < 0 ){
            console.log(`${this.nome}, morreu`)
        } 
    }
}

class Thief extends Character {

    atacar(personagem){
        if(this.ataque < personagem.defesa){
           return console.log(`Você não tem poder de ataque contra ${personagem}`)
        } else {
            const vida = personagem.vida -= (this.ataque - personagem.defesa)*2
            if(vida < 0){
                personagem.vida = 'morreu'
            }
        } 
    }
}

const person = new Thief ('Zé', 100, 90, 50);
const person1 = new Character ('Maria', 80, 90, 35);

//person1.atacar(person)
person.atacar(person1)

console.log(person)
console.log(person1)