let valor // não inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)

const prod = {}
console.log(prod.preco)
console.log(prod)

prod.preco = 3.50
console.log(prod)

prod.preco = undefined // evite atribuir undefined
console.log(!!prod.preco)
//delete prod.preco
console.log(prod)

prod.preco = null // sem preço
console.log(!!prod.preco)
console.log(prod)