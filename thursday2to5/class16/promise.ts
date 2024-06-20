// Tea
// Add Water
// After 5 seconds Tea Leaves
// after 10 seconds add milk
// After 2 seconds Sugar
// after 3 seconds tea is ready

function prepareTea(taskName: string, delay: number) {
  let promise: any = new Promise((resolve, reject) => {
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

async function runPromises() {
  try {
    let step1 = await prepareTea("add water", 0);
    let step2 = await prepareTea("add tea leaves", 5000);
    throw new Error("Error");
    let step3 = await prepareTea("add milk", 10000);
    let step4 = await prepareTea("add sugar", 2000);
    let step5 = await prepareTea("tea is ready", 0);
  } catch (error) {
    console.log("something went wrong");
  } finally {
    console.log("this is finally");
  }
}

runPromises();
