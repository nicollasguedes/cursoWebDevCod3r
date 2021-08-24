const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Victor', nota: 6.7, bolsista: true },
    { nome: 'Maria', nota: 7.4, bolsista: false },
    { nome: 'Pedro', nota: 9.8, bolsista: true },
    { nome: 'Erick', nota: 5.0, bolsista: false },
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)