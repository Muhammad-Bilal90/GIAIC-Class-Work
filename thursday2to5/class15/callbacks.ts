function callback() {
  console.log("this is callback");
}
function runCallback(cb: () => void) {
  cb();
}
runCallback(callback);
