const Class = require("./Classes")

class Teacher {
    constructor(name, topic, age){
        this.name = name
        this.topic = topic
        this.age = age
        this.class = []
    }
    createClass(time, frequency, duration){
        const aula = new Class (this, time, frequency, duration)
        this.class.push(aula);
        return aula
    }
}

module.exports = Teacher