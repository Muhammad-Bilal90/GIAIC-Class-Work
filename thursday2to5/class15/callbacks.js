"use strict";
function callback() {
    console.log("this is callback");
}
function runCallback(cb) {
    cb();
}
runCallback(callback);
