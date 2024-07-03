"use strict";
// Tea
// Add Water
// After 5 seconds Tea Leaves
// after 10 seconds add milk
// After 2 seconds Sugar
// after 3 seconds tea is ready
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function prepareTea(taskName, delay) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(taskName);
            resolve("abc");
        }, delay);
    });
    return promise;
}
// prepareTea("add water", 0)
//   .then(() => prepareTea("add tea leaves", 5000))
//   .then(() => prepareTea("add milk", 10000))
//   .then(() => prepareTea("add sugar", 2000))
//   .then(() => prepareTea("tea is ready", 0))
//   .catch(()=> console.log("something went wrong"))
// let promise = new Promise((resolve, reject) => {
//   let percentage = 80;
//   if (percentage >= 80) {
//     resolve("GOOD");
//   } else {
//     reject("BAD");
//   }
// });
// // console.log(promise)
// promise.then((res) => console.log(res)).catch((error) => console.log(error));
// console.log("After Promise");
function runPromises() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let step1 = yield prepareTea("add water", 0);
            let step2 = yield prepareTea("add tea leaves", 5000);
            throw new Error("Error");
            let step3 = yield prepareTea("add milk", 10000);
            let step4 = yield prepareTea("add sugar", 2000);
            let step5 = yield prepareTea("tea is ready", 0);
        }
        catch (error) {
            console.log("something went wrong");
        }
        finally {
            console.log("this is finally");
        }
    });
}
runPromises();
