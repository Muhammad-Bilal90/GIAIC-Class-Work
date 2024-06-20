"use strict";
// SYNCRONOUS
console.log("FIRST");
console.log("SECOND");
setTimeout(function () {
    console.log("THRID");
}, 0);
console.log("FOURTH");
