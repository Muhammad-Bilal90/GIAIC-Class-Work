"use strict";
var Calc;
(function (Calc) {
    Calc[Calc["+"] = 0] = "+";
    Calc[Calc["sub"] = 1] = "sub";
})(Calc || (Calc = {}));
// console.log(Calc);
let operator = "+";
if (operator === Calc[0]) {
    console.log(10 + 5); // 2
}
else {
    console.log(10 - 5); // 2
}
