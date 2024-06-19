class Reservation {
    constructor(guests, room, days){
        this.guests = guests
        this.room = room
        this.days = days
        this.total = days * Reservation.basefee
    }

    static basefee = 78

   static message(){
        console.log(`Sua despesa diaria será de $${Reservation.basefee}`)
    }
}

const client = new Reservation (3, '305', 6)

Reservation.message()


console.log(client)