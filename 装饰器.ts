<<<<<<< HEAD

/**
 * @author Leroy
 * @document ES7语法存在了装饰器用法，
 * ClassMethodDecoratorContext 新
 */

// 普通函数
function loggedMethod<This, Args extends any[], Return>(
  originalMethod: (this: This, ...args: Args) => Return,
  _context: ClassMethodDecoratorContext<
    This,
    (this: This, ...args: Args) => Return
  >
) {
  console.log(originalMethod, "\n", _context);

  // !函数被传入到装饰器的第一个参数是函数本身，第二个参数是函数元信息
  // [Function: greet]
  // {
  //   kind: 'method',
  //   name: 'greet',
  //   static: false,
  //   private: false,
  //   access: { has: [Function: has], get: [Function: get] },
  //   addInitializer: [Function (anonymous)]
  // }

  // 使用ts的类新接口
  const methodName = String(_context.name);

  function replacementMethod(this: any, ...args: any[]) {
    // 改变指向，传参并调用
    console.log(this, args);
    console.log(`LOG: Entering method '${methodName}'.`);
    const result = originalMethod.call(this, ...args);
    console.log(`LOG: Exiting method '${methodName}'.`);
    return result;
  }

  return replacementMethod;
}

// 作为第二个装饰器
function bound(originalMethod: Function, context: ClassMethodDecoratorContext) {
  const methodName = context.name;
  if (context.private) {
    throw new Error(
      `'bound' cannot decorate private properties like ${methodName as string}.`
    );
  }
  // 在元信息中添加一个方法
  context.addInitializer(function () {
    this[methodName] = this[methodName].bind(this);
  });
}

// 构造函数
class Human {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  @bound
  @loggedMethod
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const p = new Human("Ray");
const greet = p.greet;
// p.greet();
greet();
=======

/**
 * @author Leroy
 * @document ES7语法存在了装饰器用法，
 * ClassMethodDecoratorContext 新
 */

// 普通函数
function loggedMethod<This, Args extends any[], Return>(
  originalMethod: (this: This, ...args: Args) => Return,
  _context: ClassMethodDecoratorContext<
    This,
    (this: This, ...args: Args) => Return
  >
) {
  console.log(originalMethod, "\n", _context);

  // !函数被传入到装饰器的第一个参数是函数本身，第二个参数是函数元信息
  // [Function: greet]
  // {
  //   kind: 'method',
  //   name: 'greet',
  //   static: false,
  //   private: false,
  //   access: { has: [Function: has], get: [Function: get] },
  //   addInitializer: [Function (anonymous)]
  // }

  // 使用ts的类新接口
  const methodName = String(_context.name);

  function replacementMethod(this: any, ...args: any[]) {
    // 改变指向，传参并调用
    console.log(this, args);
    console.log(`LOG: Entering method '${methodName}'.`);
    const result = originalMethod.call(this, ...args);
    console.log(`LOG: Exiting method '${methodName}'.`);
    return result;
  }

  return replacementMethod;
}

// 作为第二个装饰器
function bound(originalMethod: Function, context: ClassMethodDecoratorContext) {
  const methodName = context.name;
  if (context.private) {
    throw new Error(
      `'bound' cannot decorate private properties like ${methodName as string}.`
    );
  }
  // 在元信息中添加一个方法
  context.addInitializer(function () {
    this[methodName] = this[methodName].bind(this);
  });
}

// 构造函数
class Human {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  @bound
  @loggedMethod
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const p = new Human("Ray");
const greet = p.greet;
// p.greet();
greet();
>>>>>>> 3e758aec842dd08f545362b9ca1a3b182f37097a
