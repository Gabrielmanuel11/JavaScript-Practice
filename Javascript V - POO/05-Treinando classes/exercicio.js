class Cliente {
    constructor (fullname, email, password){
        this.fullname = fullname,
        this.email = email,
        this.password = password
    }
    login (email, password) 
    {
        if(this.email == email && (this.password == password))
        {console.log ('Acessado com sucesso')} else {
            console.log('Acesso negado')
        }
    } 
}

class Produto {
    constructor(name, description, price,){
        this.name = name,
        this.description = description,
        this.price = price,
        this.instock = 0
    }
    addToStock (product){
        this.instock += product;
    }
    calculateDiscount(discount){
        this.price -= (discount/100)* this.price;
    }
}

const acessorio = new Produto ('cinto', 'cinto preto de vaqueiro', 50);

acessorio.addToStock(4);
acessorio.addToStock(3);
acessorio.calculateDiscount(20);
console.log(acessorio);

const acessorio2 = new Produto ('luva', 'luva de inverno marrom',20,);
acessorio2.calculateDiscount(10);
console.log(acessorio2)




