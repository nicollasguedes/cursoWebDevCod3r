const soma = function(x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma){
    console.log(operacao(a, b))
}
imprimirResultado(3, 4)
imprimirResultado(5, 6, soma)
imprimirResultado(7, 3, (x, y) => x - y )

const pessoa = {
    falar: function (){
        console.log('Opa')
    }
}

pessoa.falar()