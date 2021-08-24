const alunos = [
    { nome: 'João', nota: 7.3, bolsista: true },
    { nome: 'Victor', nota: 6.7, bolsista: true },
    { nome: 'Maria', nota: 7.4, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: true },
    { nome: 'Erick', nota: 5.0, bolsista: true },
]

const todosBolsistas = (resultado, bolsista) => resultado && bolsista

console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))