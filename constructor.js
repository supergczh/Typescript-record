var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 模板
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.greet = function () {
        console.log('hi');
    };
    Person.prototype.sayHi = function () {
        console.log('private say hi');
    };
    Person.prototype.callSayHi = function () {
        this.sayHi();
        console.log('********');
    };
    // public
    // get 方法
    Person.prototype.getFirstName = function () {
        return this.firstName;
    };
    Person.prototype.getLastName = function () {
        return this.lastName;
    };
    // public
    // set 方法
    Person.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Person.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    Person.prototype.othergreet = function () {
        this.greet();
        console.log('*****');
    };
    return Person;
}());
var aPerson = new Person("rails365", "hfpp2012");
// 相当于 set 方法
// aPerson.firstName = "rails365"
// 相当于 get 方法
// console.log(aPerson.firstName);
// aPerson.setFirstName("hfpp2012");
// aPerson.getFirstName();
// aPerson.sayHi();
// aPerson.callSayHi();
// 继承成了父类的数据和行为，就是属性和方法
// 它的父类就是 Person
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer(firstName, lastName) {
        var _this = 
        // 调用父类的构造函数的方法，要传入参数
        _super.call(this, firstName, lastName) || this;
        console.log("Programmer constructor");
        return _this;
    }
    Programmer.prototype.greet = function () {
        console.log('hello world');
    };
    // super 代表父类
    Programmer.prototype.greetLikeNormalPeople = function () {
        _super.prototype.greet.call(this);
    };
    // 子类定义的方法
    // public getFullName(): string {
    //  return `${this.firstName} ${this.lastName}`;
    // }
    // 自己定义的方法
    // getFirstName protected
    Programmer.prototype.getSuperFirstName = function () {
        return this.getFirstName();
    };
    Programmer.prototype.getSuperLastName = function () {
        return this.lastName;
    };
    // 可以访问继承过来的 private 属性
    // getFirstName 和 getLastName 是继承过来
    // public getFullName(): string {
    //  return `${this.getFirstName()} ${this.getLastName()}`;
    // }
    Programmer.prototype.getFullName = function () {
        return this.getSuperFirstName() + " " + this.getSuperLastName();
    };
    return Programmer;
}(Person));
var aProgrammer = new Programmer("rails365", "hfpp2012");
// console.log(aProgrammer.firstName);
// 继承过来的方法
// aProgrammer.getFirstName();
// console.log(aProgrammer.getFullName());
// console.log(aProgrammer.getFirstName());
// console.log(aProgrammer.getSuperFirstName());
// constructor
// 构造方法
// 如果申明为protected
//  或者 private ，当前类不能 new
// 当父类申明为 protected，子类重写 constructor 方法后可以 new（子类可以 new）
// 如果父类申明为 private, 子类不能 new 和 extends
// super() 在constructor方法中是调用父类的 构造方法，必要时，要传入参数。
// 作用
// 1， 当不想被实例化，而只想让子类继承后实例化，可以申请为 protected
// 2. 都不想让子类和父类实例化或继承，可以申请为 private
// 3. 一般情况下，申请为 public (或不写）
