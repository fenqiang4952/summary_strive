// `delay`毫秒后执行resolve
function timerPromisefy(delay) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(delay);
        }, delay);
    });
}
// 任何一个promise变为resolve或reject 的话程序就停止运行
Promise.race([
    timerPromisefy(1),
    timerPromisefy(32),
    timerPromisefy(64),
    timerPromisefy(128)
]).then(function (value) {
    console.log(value);    // => 1
});

// promise.race方法写法与promise.all一致，但是promise.race是只要有一个promise进入确定（FulFilled）状态，就会调用resolve，其他的promise不会进入resolve，但是代码依然会执行，不会中断。