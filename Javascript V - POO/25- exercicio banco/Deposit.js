class Deposit {
    constructor(value){
        this.value = value
        this.createdAt = new Date().toLocaleDateString()
    }
}

module.exports = Deposit