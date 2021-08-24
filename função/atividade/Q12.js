let fatorialNum = (fatorial) => {
    if (fatorial == 0){
        return 1
    }else{
        return fatorial * fatorialNum(fatorial - 1)
    }
}

console.log(fatorialNum(5))