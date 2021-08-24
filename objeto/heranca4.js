function meuOBjeto() {}
console.log(meuOBjeto.prototype)

const obj1 = new meuOBjeto
const obj2 = new meuOBjeto

console.log(obj1.__proto__ === obj2.__proto__)
console.log(meuOBjeto.prototype === obj1.__proto__)

meuOBjeto.prototype.nome = 'Anônimo'
meuOBjeto.prototype.falar = function() {
    console.log(`Bom dai! Meu nome é ${this.nome}!`)
} 

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = meuOBjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()