let listaGrupos = []
function cadastroGrupos(numeroDeIntegrantes, listaDeNomes){
    let index = 0
    do{
        listaGrupos.push(listaDeNomes[index])
        index = index + 1
        if (numeroDeIntegrantes >= 2){
        numeroDeIntegrantes = numeroDeIntegrantes - 1 
    }
    }while(numeroDeIntegrantes > 1)
}

cadastroGrupos(1, ['Nicollas'])
console.log(listaGrupos)
listaGrupos = []
cadastroGrupos(3, ['Nicollas', 'Gustavo'])

console.log(listaGrupos)