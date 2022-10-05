const calculator = {
    add: function (a, b) {
        return a + b
    },
    minus: function (a, b) {
        return a - b
    },
    multiply: function (a, b) {
        return a * b
    },
    divide: function (a, b) {
        return a / b
    },
    powerOf: function (a, b) {
        return a ** b
    }
}

const a = 2
const b = 4

console.log(calculator.add(a, b))
console.log(calculator.minus(a, b))
console.log(calculator.multiply(a, b))
console.log(calculator.divide(a, b))
console.log(calculator.powerOf(a, b))