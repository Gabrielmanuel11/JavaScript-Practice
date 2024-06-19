const aluno = {
    nome: 'Robeto',
    idade: 15,
    turno: 'Noite',
    Ola(){
        console.log('Ola meu nome é' + this.nome + ', eu tenho ' +this.idade+ ' e estudo no turno da ' +this.turno)
    }   
}

aluno.Ola()