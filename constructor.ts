// 模板
class Person {
  // 定义了两个数据内容
  protected firstName: string;
  protected lastName: string;

  public constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
  }

  public greet() {
      console.log('hi');
  }

  protected sayHi() {
      console.log('private say hi');
  }

  public callSayHi() {
      this.sayHi();
      console.log('********');
  }

  // public
  // get 方法
  protected getFirstName() {
      return this.firstName;
  }

  getLastName() {
      return this.lastName;
  }

  // public
  // set 方法
  setFirstName(firstName) {
      this.firstName = firstName;
  }

  setLastName(lastName) {
      this.lastName = lastName;
  }

  public othergreet() {
      this.greet();
      console.log('*****');
  }
}

let aPerson = new Person("rails365", "hfpp2012");
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
class Programmer extends Person {
  public greet() {
      console.log('hello world');
  }

  constructor(firstName: string, lastName: string) {
      // 调用父类的构造函数的方法，要传入参数
      super(firstName, lastName);
      console.log("Programmer constructor");
  }

  // super 代表父类
  public greetLikeNormalPeople() {
      super.greet();
  }

  // 子类定义的方法
  // public getFullName(): string {
  //  return `${this.firstName} ${this.lastName}`;
  // }

  // 自己定义的方法
  // getFirstName protected
  getSuperFirstName(): string {
      return this.getFirstName();
  }

  getSuperLastName(): string {
      return this.lastName;
  }

  // 可以访问继承过来的 private 属性
  // getFirstName 和 getLastName 是继承过来
  // public getFullName(): string {
  //  return `${this.getFirstName()} ${this.getLastName()}`;
  // }

  public getFullName(): string {
      return `${this.getSuperFirstName()} ${this.getSuperLastName()}`;
  }
}

let aProgrammer = new Programmer("rails365", "hfpp2012");
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