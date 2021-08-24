let juroSimples = (capitalInicial, taxaJuros, tempoMeses) => {
    let result = 0;
        result = capitalInicial + (capitalInicial * (taxaJuros/100) * tempoMeses); 
    console.log(`montante com Juros Simples: ${result}`)
}

let juroComposto = (capitalInicial, taxaJuros, tempoMeses) => {
    let result = 0;
        result = capitalInicial * (1 + (taxaJuros/100))**tempoMeses; 
    console.log(`montante com Juros Composto: ${result}`)
}

juroSimples(3000,70,2)
juroComposto(3000,70,2)