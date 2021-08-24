let exponentPower = (base, exponent) => {
    let sum = 1;
    for (let index = 0; index < exponent; index++) {
        sum *= base;
        
    }
    console.log(sum)
}

exponentPower(3,4)