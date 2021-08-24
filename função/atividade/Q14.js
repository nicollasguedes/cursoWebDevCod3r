let frutasFeirinha = (frutaStr) => {
    switch (frutaStr) {
        case 'maça':
            console.log('Não vendemos esta fruta aqui.')
            break
        case 'kiwi':
            console.log('Estamos comescassez de kiwis')
            break
        case 'melancia':
            console.log('Aqui está, são 3 reais o quilo')
            break
    }
}

frutasFeirinha('kiwi')