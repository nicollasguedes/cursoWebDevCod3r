let baskara = (ax2, b, c) => {
    let x1 = 0;
    let x2 = 0;
    let delta = 0;

    delta = (b**2) - (4*ax2*c);
    console.log(delta)
    if(delta > 0){
    x1 = (-b + Math.sqrt(delta)) / 2*ax2;
    console.log(Math.sqrt(delta))
    x2 = (-b - Math.sqrt(delta)) / 2*ax2;
    console.log(`x1: ${x1}\n x2: ${x2}`)
    }else if(delta == 0){
        x1 = (-b + 0) / 2*ax2;
        x2 = (-b - 0 ) / 2*ax2;
        console.log(`x1: ${x1}\n x2: ${x2}`)
    } else{
        console.log(`Delta é negativo.`)
    }
} 

baskara(1,12,-13);