let comprarVeiculo = (frutaStr) => {
    switch (frutaStr) {
        case 'hatch':
            console.log('Compra efetuada com sucesso.')
            break
        case 'motocicletas': case 'sedans': case 'caminhonetes':
            console.log('Tem certeza que não prefere este modelo?')
            break
        default:
            console.log('Não trabalhamos com este tipo de automóvel aqui')
            break
    }
}

comprarVeiculo('hatch')
comprarVeiculo('sedans')
comprarVeiculo('mobilete')