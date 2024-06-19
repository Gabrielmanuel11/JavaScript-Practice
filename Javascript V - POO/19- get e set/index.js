class BankAccount {
    #balance
    #username
    constructor (balance, username){
        this.#balance = balance * 100 // trata os nº se vierem com virgula
        this.#username = username
    }

    get balance (){
        return this.#balance = this.#balance / 100 // retorna os nº adequadamente para os usuários
    }

    set username (newusername){
      this.#username = newusername
    }
    get username (){
       return this.#username
    }
}

const user = new BankAccount (10009)
const user1 = new BankAccount (2000, "Zé")

user.username = 'Rai'

console.log(user1.balance)
console.log(user1.username)