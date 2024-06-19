const Installment = require("./Installment")

class Loan {
    static #tax = 0.05

    constructor(loanValue, installments){
        this.loanValue = loanValue
        this.installments = []
        for (let i = 1; i <= installments; i++){
            this.installments.push(new Installment((loanValue * Loan.#tax)/ installments), i)
        }
        this.createdAt = new Date ().toLocaleDateString
    }

    static get tax(){
        return Loan.#tax
    }

    static set tax(newTax){
        Loan.#tax = newTax / 100
    }

}
