const age = prompt('연세가 어떻게 되세요..? ^^')

// switch (typeof age) {
//     case 'string':
//         console.log(age)
//         break
//     case 'number':
//         console.log(parseInt(age))
//         break
//     case 'boolean':
//         console.log(age)
//         break
// }

if (isNaN(Number(age))) {
    console.log(age)
} else {
    console.log(parseInt(age))
}