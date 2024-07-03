"use strict";
// // console.log('add water')
// // setTimeout(()=>{
// //     console.log("add tea leaves")
// // },5000)
// // setTimeout(()=>{
// //     console.log("add milk")
// // },10000)
// // setTimeout(()=>{
// //     console.log("add sugar")
// // },2000)
// // setTimeout(()=>{
// //     console.log("tea is ready")
// // },3000)
// // Tea
// // Add Water
// // After 5 seconds Tea Leaves
// // after 10 seconds add milk
// // After 2 seconds Sugar
// // after 3 seconds tea is ready
// function prepareTea(taskName: string, delay: number, cb: () => void) {
//   setTimeout(() => {
//     console.log(taskName);
//     cb();
//   }, delay);
// }
// prepareTea("add water", 0, () => {
//   prepareTea("add tea leaves", 5000, () => {
//     prepareTea("add milk", 10000, () => {
//       prepareTea("add sugar", 2000, () => {
//         prepareTea("tea is ready", 3000, () => {
//           console.log("tea is fantastic");
//         });
//       });
//     });
//   });
// });
