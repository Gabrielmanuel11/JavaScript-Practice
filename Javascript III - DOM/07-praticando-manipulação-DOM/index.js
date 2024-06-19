function criarContato() {
const contactsession = document.getElementById('lista-de-contatos')
const h3 = document.createElement('h3');
h3.innerHTML = "Contato";

const ul = document.createElement ('ul');

const nameli = document.createElement('li');
nameli.innerHTML = 'Nome: '
const nameinput = document.createElement('input');
nameinput.type = 'text';
nameinput.name = 'full name';
nameli.appendChild(nameinput);
ul.appendChild(nameli);

}