// x? number | undefined
function show(x) {
    if (x === undefined) {
        console.log("value not set");
    }
    else if (x === null) {
        console.log("value is null");
    }
    else {
        console.log(x);
    }
}
var x = 10;
// undefined
var y;
var z = null;
show(x);
show(y);
show(z);
// * Something hasn't been initialized : undefined.
// * Something is currently unavailable: null.
// null 和 undefined 分别有自己的类型，分别是 null 和 undefined
// 它们的值 null 和 undefined 分别可以赋值给很多类型，比如 string number 之类的，它们可以是很多类型的子类型
// let x: string = null;
// 当运行 tsc 加上 --strictNullChecks 选项，就会进行严格的空值检查
