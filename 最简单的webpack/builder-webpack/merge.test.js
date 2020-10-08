const { merge } = require('webpack-merge');

let a = {
    a: 1,
    b: {1: 1, 2: 2}
}
let b = {
    c: 1,
    b: 2
}
console.log(merge(a, b));