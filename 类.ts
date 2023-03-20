/**
 * @author Leroy
 * !这里使用最新的ES13的类创建方法
 */

// !基础类
class Dog {
  // 这个定义方法等于是分开写
  name: string;
  // 等价于python __init__初始化对象
  constructor(name: string) {
    this.name = name;
  }

  // 静态对象，集成写法
  static classData: any = { a: 1 };
  static demo = (): void => {
    console.log("静态方法");
  };

  run() {
    console.log(111);
  }

  // 私有属性和方法，只能内部使用
  #privately: string = "私有属性";
  #priFunc = (): void => {
    console.log("私有方法");
  };

  // 只能通过公有方法调用私有属性和方法
  allPri(): void {
    this.#priFunc();
    console.log(this.#privately);
  }
}

// 单继承
class Husky extends Dog {
  color: string;

  constructor(name: string, color: string) {
    // super继承父亲中的对象和方法，说白了，就是super等价于Dog.this
    super(name);
    this.color = color;
  }

  // 调用静态方法和静态对象
  static logDescription() {
    super.demo();
  }
}

// !高级类public(默认)、private、protected、readonly
class Animal {
  // 就算不加public也行
  public name: string;
  public constructor(name: string) {
    this.name = name;
  }
}

class Animal2 {
  // 修饰成为私有属性，说白了就是 #name
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Animal3 {
  // 只要保护起来，就不能继承这个属性or方法,子类继承引用会报错
  protected name: string;
  public constructor(name: string) {
    this.name = name;
  }
}

class Animal4 {
  // 只能读取初始的赋值，不能再次修改
  readonly name: string;
  public constructor(name: string) {
    this.name = name;
  }
}

// ?抽象类，单纯只能被继承引用，无法实例化

abstract class AnimalF {
  public name: string;
  public constructor(name: string) {
    this.name = name;
  }
  abstract sayHi(): any;
}

class Cat extends AnimalF {
  public color: string;
  sayHi() {
    console.log(`Hi`);
  }
  constructor(name: string, color: string) {
    super(name);
    this.color = color;
  }
}

// new AnimalF() 会报错
let a = new Cat("Tom", "Blue");

// !接口inter\ 可以多继承。。。类继承哭晕厕所
// 之前我们是内部直接定义属性和方法的type，现在使用接口
interface F {
  name: string;
  eat(): void;
}

interface F1 {
  name: string;
  eat(): void;
}

// 类接口
class Cat2 implements F, F1 {
  // 这个还要定义到这里
  public name;

  constructor(name: string) {
    this.name = name;
  }
  eat() {}
}
