// 模板
class Person {
  // 定义了两个数据内容
  protected firstName: string;
  protected lastName: string;

  constructor() {
      this.firstName = "rails365";
      this.lastName = "hfpp2012";
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
  private getFirstName() {
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

// let aPerson = new Person();
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

let aProgrammer = new Programmer();
// console.log(aProgrammer.firstName);
// 继承过来的方法
// aProgrammer.getFirstName();
// console.log(aProgrammer.getFullName());
// console.log(aProgrammer.getFirstName());

console.log(aProgrammer.getSuperFirstName());

// 三个修饰符对成员属性和方法进行修饰

// public 公有的，任何属性和方法都可以在生成的对象中调用，
//              继承的对象也能调用，
//               默认就是 public，只是省略了

// private 私有的，只有在内部对象内才能访问，生成的对象调用不了，
//                要调用私有方法和属性，可以在 class 里定义 public 的方法来调用
//           继承的对象也是不能够直接用生成的对象来访问
//           子类继承的时候也可以继承私有属性和方法，也是要通过继承过来的 public 方法来调用

// protected 受保护的，只有在内部 class  还有子类才能访问，生成的对象访问不了，
//                 要调用私有方法和属性，可以在 class 里定义 public 的方法来调用
//           继承的对象也是不能够直接用生成的对象来访问
//           子类继承的时候也可以继承保护的属性和方法，也是要通过继承过来的 public 方法和自己定义的public方法来在外部调用（这点跟其他的语言有些不太一样）

// 外部调用：生成对象的时候
// 内部调用：class 里面的方法

// private protected异别： 在子类的时候 
//         1 继承的方法一样的表现形式，可以内部访问继承过来的 public private protected 属性和方法
//              2 子类定义的方法，只能访问 继承过来的 public 和 protected 的方法和属性，不能访问 继承过来的 private 属性和方法，如果要访问父类的  private 属性和方法，可以通过继承过来的public private protected方法在内部来访问


// 权限范围 public > protected > private