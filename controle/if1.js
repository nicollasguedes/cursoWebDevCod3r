function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('aprovado com ' + nota)
    }else{
        console.log('burrão kkkkkkkkkkkkkkkkkkk nota: ' + nota+ ' é pro pai chorar no banho')
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('É verdade... ' + valor)
    }else{
        console.log('acha que vou acreditar.. ' + valor)
    }
}

seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo('?')
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo([])
seForVerdadeEuFalo({})
seForVerdadeEuFalo([1,2])