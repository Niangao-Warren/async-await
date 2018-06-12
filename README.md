### async/await 异步解决方案

Async 函数作为异步解决方案的最优解，async/await 特性能让我们编写出相比回调地狱和 Promise 链式调用更直观、更容易理解的代码，Async 函数返回一个 Promise 对象，可以使用 `then()` 方法添加回调函数，当函数执行的时候，一旦遇到 `await` 就会先返回，等到异步操作完成，再接着执行函数体内后面的语句

关于该项目的讲解，可参考该篇博文：[ECMAScript7 async/await 异步解决方案](https://www.jianshu.com/p/dffa4ec4d452)
