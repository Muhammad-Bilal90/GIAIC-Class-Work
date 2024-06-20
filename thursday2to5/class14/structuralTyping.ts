// type FrontendDev = {
//   html: boolean;
//   css: boolean;
//   typescript: boolean;
//   nextjs: boolean;
// };

// const riaz = {
//   html: true,
//   css: true,
//   typescript: true,
//   nextjs: true,
//   angularjs: true,
//   python: true,
//   ai: true,
// };

// let candidate: FrontendDev = riaz;
// console.log(candidate);

// type Ball = {
//   diameter: number;
//   shape: string;
//   color: string;
// };

// type Football = {
//   diameter: number;
//   shape: string;
//   color: string;
//   manufacturer: string;
// };

// let ball: Ball = {
//   diameter: 10,
//   shape: "circle",
//   color: "red",
// };

// let football: Football = {
//   diameter: 30,
//   shape: "circle",
//   color: "golden",
//   manufacturer: "adidas",
// };

// ball = football
// football = ball

// let myType = {
//   id: 1,
//   name: "Bilal"
// }

// myType = {
//   id: 2,
//   my_name: "Bilal"
// }

// let x: { id: number; [y: string]: string };

// x = {
//   id: 12,
//   my_name: "Fahad",
//   designation: 2
// }
let myType = { name: "Zia", id: 1 };
let myType2 = { id: 2, name: "Tom" };

//Case 1
myType = myType2; //Case 1: can only assign a type which has the the same properties, rule same for fresh and stale object

let myType3 = { id: 2, name_person: "Tom" };
//Case 2a
// myType = myType3; //Case 2: Error, renamed or missing property, rule same for stale and fresh object
