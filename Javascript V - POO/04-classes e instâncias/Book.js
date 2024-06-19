
    function Student (name, lastname, birthdate, phonenumber, classtime, classday, frequency) {
        this.name = name
        this.lastname = lastname
        this.birthdate = birthdate
        this.phonenumber = phonenumber
        this.classtime = classtime
        this.classday = classday
        this.frequency = frequency
    }




const gabriel = new Student ("Gabriel", "Manuel", '16-03-1998', '992726057', '8:00pm', 'Seg/Quar/Sex');



const joao = new Student ("Joao", "Manuel", '16-03-1998', '992726057', '8:00pm', 'Seg/Quar/Sex', '4x');

//console.log (joao);
//console.log (gabriel);

class Teacher {
    constructor(name, age, level){
        this.name = name,
        this.age = age,
        this.level = level,
        this.active = false
    }

    test() {
        this.active = true
    }
}

const aula = new Teacher ('Paula','30','B1');
const aula2 = new Teacher ('Marcos','35','B2');
const aula3 = ['Marcio']


aula.test();

console.log(aula);
console.log(aula2);

console.log(aula3 instanceof Teacher);