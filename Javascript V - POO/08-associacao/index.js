const Address = require('./Address')
const Person = require('./Person')
const Comment = require('./Comment')
const Post = require('./Post')
const Author = require('./Author')

/*const addr = new Address('7 de Setembro', 92, 'Centro', 'São Fidélis', 'RJ')
const john = new Person('John Doe', addr)

console.log(john)
console.log(john.address.fullAddress())*/

const jose = new Author ('Jose')

const post = jose.createPost('Férias na praia', 'Lorem ipsum dorma')
post.likePost(11)

const comments = post.addComment('Marcio','Curti a paisagem')
const comments1 = post.addComment('Leticia', 'Só de boa né?')

console.log (post);


