enum Calc {
  "+",
  "sub",
}

// console.log(Calc);

let operator = "+";

if (operator === Calc[0]) {
  console.log(10 + 5); // 2
} else {
  console.log(10 - 5); // 2
}
