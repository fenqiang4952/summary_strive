var winnerPromise = new Promise(function (resolve) {
    setTimeout(function () {
        console.log('1');
        resolve('12');
    }, 400);
});
var loserPromise = new Promise(function (resolve) {
    setTimeout(function () {
        console.log('2');
        resolve('22');
    }, 1);
});
// 第一个promise变为resolve后程序停止
Promise.race([winnerPromise, loserPromise]).then(function (value) {
console.log(value);    // => '22'
});


// Promise.race 在第一个promise对象变为Fulfilled之后，并不会取消其他promise对象的执行。但是不会执行后面的resolve
// 上面的代码会输出2，22，1但是不会输入12.
// 这个使用场景是什么？
