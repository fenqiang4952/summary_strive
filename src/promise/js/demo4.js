var promise = new Promise(function(resolve, reject){
    throw new Error("message");
});
promise.catch(function(error){
    console.error(error);// => "message"
});



var promise = new Promise(function(resolve, reject){
    reject(new Error("message"));
});
promise.catch(function(error){
    console.error(error);// => "message"
})



// 需要抛出错误时，使用throw和reject都可以达到效果。建议使用reject。
// 因为我们很难区分 throw 是我们主动抛出来的，还是因为真正的其它 异常 导致的，而reject不会存在这个问题。
// 但是上面的方法只能做到在promise对象中reject异常，如果想在then中抛出异常呢，如下的代码可以帮助我们解决这个问题：
var onRejected = console.error.bind(console);
var promise = Promise.resolve();
promise.then(function () {
    var retPromise = new Promise(function (resolve, reject) {
       reject(new Error("this promise is rejected"));
    });
    return retPromise;
}).catch(onRejected);

var onRejected = console.error.bind(console);
var promise = Promise.resolve();
promise.then(function () {
    return Promise.reject(new Error("this promise is rejected"));
}).catch(onRejected);