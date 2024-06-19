class Transfer {
    constructor(userSent, userReceived, value){
        this.userSent = userSent
        this.userReceived = userReceived
        this.value = value
        this.createdAt = new Date ().toLocaleDateString()
    }
}

module.exports = Transfer