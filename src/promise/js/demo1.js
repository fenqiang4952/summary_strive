
function asyncFunction() {
    return new Promise(function (resolve, reject) {
        console.log(1);
        setTimeout(function () {
            //   reject('啦啦啦啦')
              resolve('拉克')
              console.log(3);
        }, 16);
    });
}
asyncFunction().then(function (value) {
    console.log(value);    
}).catch(function (error) {
    console.log(error);
});
console.log(2);
/**
 * 请注意，在promise里resolve和reject只能执行一个，执行了一个，另一个就不会执行了。
 * 即时没有setTimeout 直接执行resolve，也是异步的，即1，3，2，'拉克'
 */
