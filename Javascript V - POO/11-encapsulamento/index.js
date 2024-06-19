class Myaccount{
    #password
    #balance = 0;
    constructor(user){
        this.email = user.email
        this.#password = user.password
    }

    getBalance(email, password){
        if(this.email === email && this.#password === password){
            return this.#balance
        } else {
            return null
        }
    }
}

const user = {
    email: 'gabriel@gmail.com',
    password: '1234'
}

const bradesco = new Myaccount(user);

console.log(bradesco)
console.log(bradesco.getBalance('gabriel@gmail.com','1234'))