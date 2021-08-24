
const pessoa = {
    nome: 'Nicollas',
    idade: 19,
    endereco: {
        logradouro: 'Rua José Alexandre Nunes',
        numero: 241
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: nomeUser, idade: idadeUser } = pessoa
console.log(nomeUser, idadeUser)

const { endereco: {logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)