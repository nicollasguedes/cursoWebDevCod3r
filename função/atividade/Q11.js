let bissexto = (yyyy) => {
    if(yyyy % 4 === 0 || yyyy % 400 === 0){
        return `${yyyy} é bissexto`
    }else if (yyyy % 100 == 0){
        return `${yyyy} não é bissexto`
    }else if( yyyy <= 0){
        console.log('Valor indisponivel')
    }else{
        return `${yyyy} não é bissexto`
    }
}

console.log(bissexto(2000))
console.log(bissexto(2005))