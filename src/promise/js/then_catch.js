function throwError(value) {
    // 抛出异常
    throw new Error(value);
}
// <1> onRejected不会被调用
function badMain(onRejected) {
    return Promise.resolve(42).then(throwError, onRejected);
}
// <2> 有异常发生时onRejected会被调用
function goodMain(onRejected) {
    return Promise.resolve(42).then(throwError).catch(onRejected);
}
// 运行示例
badMain(function(){
    console.log("BAD");
});
goodMain(function(){
    console.log("GOOD");
});

// reject和catch的区别，都是用来捕获异常的。
// reject只对他的promise对象或是之前的promise对象，而不包括resolve。
// catch则包括之前的promise对象，以及resolve
// 其实catch只是then(null, rejected)的一种写法，没有本质区别，只是这样看起来更容易理解。