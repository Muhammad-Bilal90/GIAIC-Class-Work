"use strict";
function sum(num1, num2) {
    return num1 + num2;
}
// let anyTypeArr: any[] = ["Ammar", 1, true, { name: "riaz" }, ["string"]];
// function restFunc(param1: string, param2: string, ...data: string[]) {
//   return param1 + " " + param2 + data.join(" ");
// }
// console.log(restFunc("Fahad", "Khan", "is", "a", "good", "developer"));
// let arr = ["fahad", "is", "a", "good", "developer"];
// console.log(arr);
// console.log(arr.join(" "));
function myConsolelog(...data) {
    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
    }
}
myConsolelog("Ammar", 17, true, { name: "riza" }, [1, 2, 3]);
// console.log(addition(10, 20, 40));
console.log({ name: "FAhad" }, ["Riaz", 25], 25, true);
