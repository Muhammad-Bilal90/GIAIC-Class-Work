// FUNCTION OVERLOADING

function testFunc(a: number, b: number): number;
function testFunc(a: string, b: string): string;
function testFunc(a: boolean, b: boolean): boolean;

function testFunc(a: any, b: any): any {
  return a + b;
}

console.log(testFunc(1, 2));
console.log(testFunc("Fahad", "Khan"));
console.log(testFunc(true, true));
// testfunc("Fahad","Khan")
// testfunc(true, true)

if (0) {
  console.log("If is ruuning");
}
