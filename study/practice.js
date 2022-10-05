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

const plusResult = calculator.add(a, b)
const minusResult = calculator.minus(plusResult, 10)
const timesResult = calculator.multiply(10, minusResult)
const divideResult = calculator.divide(timesResult, plusResult)
const powerOfResult = calculator.powerOf(divideResult, minusResult)