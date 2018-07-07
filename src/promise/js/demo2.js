Promise.resolve(42).then(function(value){
    console.log(value);
});

// resolve 作为静态方法使用，有两个作用，第一，语法糖：
// `Promise.resolve(42)`就等于
// ```
// new Promise(function(resolve){
//    resolve(42);
// });
// ```
// 第二点：用作`Thenable`,就是将类promise的对象转换成promise,可以像promise一样用`.then`方法