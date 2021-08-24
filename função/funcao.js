function fun1() {
    return undefined
}

const fun2 = function () { }

const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

const obj = {}
obj.falar = function () { return 'opa' }
console.log(obj.falar())

function run(fun) {
    
}