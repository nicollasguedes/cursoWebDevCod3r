let triangleTest = (aSide, bSide, cSide) => {
    if(aSide === bSide && aSide === cSide && bSide === cSide){
        console.log('Equilátero')
    } else if(aSide === bSide || bSide === cSide || aSide === cSide){
        console.log('isósceles')
    }else{
        console.log('Escaleno')
    }
} 

triangleTest(2,2,2)
triangleTest(2,2,1)
triangleTest(3,2,1)