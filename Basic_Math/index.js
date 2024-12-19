
const sum = require("./sum");
const multiply = require("./multiplication");
const substraction = require("./substraction");
const division = require("./division");

let sumA = 3;
let sumB = 5;
let sumResult = sum(sumA, sumB);
console.log(sumResult);

let mulA = 4;
let mulB = 6;
let mulResult = multiply(mulA, mulB);
console.log(mulResult);

let subA=8
let subB=4
let subResult=substraction(subA, subB)
console.log(subResult)

let divA=25
let divB=0
let divResult=division(divA,divB)
console.log(divResult)