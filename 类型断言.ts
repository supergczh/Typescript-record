// interface Person {
//  // 只读，不可修改
//  readonly first_name: string
//  last_name?: string

//  print(callback: PrintCallback): void


//  [propName: string]: any;
// }

// x 代表可以是任何类型，比如字符串 number 之类的
let x: any = "hi there";
// x 可以是任何类型，编译器可能不能明确知道 x 是哪种类型
// <string> 表示把 x 断言成字符串类型，就是告诉编译器要把 x 当成字符串，这样
// 就可以调用 substring 函数，因为字符串才有这个函数
let s = (<string>x).substring(0, 3);
console.log(typeof s);

// 编译器可能不知道明确的类型，因为可以是两者之一
function getLength(something: string | number): number {
    if ((<string>something).length) {
        return (<string>something).length;
    } else {
        return something.toString().length;
    }
    // return something.length
}

// 会报错
// function toBoolean(something: string | number): boolean {
//  return <boolean>something;
// }

interface Person {
    name: string;
    age: number;
}

// 另一种类型断言的方式 as
// 更好的明确类型和类型里面的结构
let person = {} as Person;
person.name = "rails365";
person.age = 27;

// 一种写法
// react <div></div>
let person1 = <Person>{
    name: "rails365",
    age: 27
}

// let person: Person = {
//     name: "rails365",
//     age: 27
// }


// interface PrintCallback {
//  // 可以简单理解为匿名函数
//  (success: boolean): void
// }

// let printCallback: PrintCallback;
// printCallback = (suc: boolean): void => {
//  console.log("callback", suc);
// }

// let person: Person = {
//  first_name: "hfpp2012",
//  age: 27,
//  print: (callback: PrintCallback): void => {
//      console.log('hello');
//      callback(true);
//  }
// }

// person.print(printCallback);

// person.first_name = "tony";

// class Programmer implements Person {
//  first_name: string;
// }

// const programmer: Person = new Programmer();
// programmer.first_name = "tony";

// const sayName = (o: Person) => {
//  console.log(o.first_name);
// }

// sayName(programmer);

// sayName(person);

// 类型断言
// sayName({ first_name: "hfpp2012", last_name: "rails365", age: 27 } as Person)

//
// sayName({ first_name: "hfpp2012", lassst_name: "rails365", age: 27 })