class Pessoa {
    constructor(nome, idade){
        this.nome = nome,
        this.idade = idade
        this.cadastrado = false
    }

    cadastrado(){
        return this.cadastrado = true;
    }
}

class Aluno extends Pessoa {}

const aluna1 = new Aluno ('Giovana', '24');

class Professor extends Pessoa {
    constructor(nome, idade, faculdade){
        super(nome, idade, faculdade)
        this.faculdade = faculdade
    }
}

const professor1 = new Professor ("Ricardo","45",'sim');


console.log(professor1)
console.log(aluna1)

