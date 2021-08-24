const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']

console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 5000,
    owner: {
        nome: 'Nicollas',
        idade: 19,
        endereco: {
            country: 'Brasil',
            estado: 'PB',
            cidade: 'Sousa',
            logradouro: 'Rua José Alexandre Nunes',
            num: 241,
        }
    },
    condutores: [{
        nome: 'Junior', idade: 25
    }, {
        nome: 'nicollas', idade: 19
    }],
    calcularValorSeguro : function(){
        // ...
    }
} 
console.log(carro)

carro.owner.endereco.num = 242

delete carro.condutores
delete carro.calcularValorSeguro
delete carro.owner.endereco

console.log(carro)

console.log(carro.condutores)