function taskA() {
    console.log("Task A");
}
function taskB() {
    console.log("Task B");
}
function onRejected(error) {
    console.log("Catch Error: A or B", error);
}
function finalTask() {
    console.log("Final Task");
    return 2
}

// var promise = new Promise(function(resolve, reject){
// 	resolve()
// });
var promise = Promise.resolve()
var v = promise
    .then(taskA)
    .then(taskB)
    .catch(onRejected)
    .then(finalTask);
v.then( (i) => console.log(i) )
// promise的链式调用
// promise链式调用完了返回的还是一个promise对象（貌似是废话），即V也是一个promise对象，可以用`v.then((i) => console.log(i) )`，结果为2