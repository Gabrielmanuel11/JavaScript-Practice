const Student = require("./Student")

class Class {
    constructor(teacher, time, frequency, duration){
        this.teacher = teacher
        this.students = []
        this.time = time
        this.frequency = frequency
        this.duration = duration
    }
    addStudent(nome, age, level){
      this.students.push(new Student (nome, age, level)) 
         
    }
}

module.exports = Class