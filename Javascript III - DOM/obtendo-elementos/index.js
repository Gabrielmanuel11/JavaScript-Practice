function show() {
    // Obter um elemento único a partir do seu id
    const contactList = document.getElementById("contact-list")
    console.log(contactList)
  }

  function show() {
    // ...
  
    // Obter vários elementos (HTMLCollection) a partir de um nome de tag
    const liElements = document.getElementsByTagName("li")
    console.log(liElements)
  }

  function show() {
    // ...
  
    // Obter vários elementos (HTMLCollection) a partir de uma classe
    const contactInputs = document.getElementsByClassName("contact-input")
    console.log(contactInputs)
  }

  function show() {
    // ...
  
    // Obter vários elementos (NodeList) a partir do atributo name
    const contact1 = document.getElementsByName("contact1")
    console.log(contact1)
  }

  function show() {
    // ...
  
    // Obter um elemento a partir de uma query (o primeiro elemento a corresponder)
    const contact = document.querySelector("#contact-list > li > label")
    console.log(contact)
    console.log(contact.textContent)
  }