const Class = require("./Classes");
const Teacher = require("./Teacher");


const teacher1 = new Teacher ('José', 'Ciências','36');
const teacher2 = new Teacher ('Rafela', 'Matemática','28');

const class1 = teacher1.createClass('19:00','2x','45min')
const class2 = teacher1.createClass('20:00','3x','45min')

//const maria = class1.addStudent('Maria','23','Intermediário')
class1.addStudent('Maria', '23', 'Intermediário')
class1.addStudent('Fabio', '33', 'Avançado')
class1.addStudent('Carol', '18', 'Intermediário')


console.log(teacher1);
//console.log(teacher2);

