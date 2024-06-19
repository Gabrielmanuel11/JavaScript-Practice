const Deposit = require("./Deposit")

class Account {
    #balance
    constructor(user, balance, deposits, loans, transfers, ){
        this.owner = user
        this.#balance = 0
        this.deposits = []
        this.loans = []
        this.transfers = []
    }
    
    newDeposit(deposit){
        this.#balance += deposit.value
        this.deposits.push(deposit)
    }

    newLoan(loan){
        this.loans += loan.value
        this.loans.push(loan)
    }
    newTransfer(transfer){
        if (transfer.userReceived.email === this.owner.email){
            this.#balance += transfer.value
            this.transfers.push(transfer)
        } else if (transfer.userSent.email === this.owner.email){
            this.#balance -= transfer.value
        }
    }


}