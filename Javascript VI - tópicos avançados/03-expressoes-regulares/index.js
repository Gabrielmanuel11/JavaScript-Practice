

class Validator{
    constructor(countryCode, ddd, number){
        this.countryCode = countryCode
        this.ddd = ddd
        this.number = number
    }

  phoneNumber() {
        const fixedString = this.countryCode+this.ddd+this.number.replace(/[\sa-zA-Z]/g, "")
        this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0]
        this.ddd = fixedString.match(/(?<=\()\d+(?=\))/)[0]
        this.number = fixedString.match(/(?<=\)).+/)[0].replace(/-/g, "")
    }
}

const phone = new Validator('+55', '(11)', '992726057')

phone.phoneNumber(phone)

console.log(phone);