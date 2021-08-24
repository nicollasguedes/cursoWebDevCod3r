const pessoa = { nome: 'Joao' }
pessoa.nome = 'Nicollas'
console.log(pessoa)


Object.freeze(pessoa)

pessoa.nome = 'Didi'

console.log(pessoa.nome)