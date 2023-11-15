/**
 * @author Leroy
 * !泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
 * !这就是自己定义自己。。。T、U、V常用
 */

function createArray<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

// 手动传入类型
createArray<string>(3, "x"); // ['x', 'x', 'x']
// 自动推断类型
createArray(3, "x"); // ['x', 'x', 'x']

// !多类型传参
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

swap([7, "seven"]); // ['seven', 7]

// !泛型约束
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

loggingIdentity({ length: 20, data: "2333" });
// !条件判断关键词

type ReturnType<T> = T extends () => infer R ? R : never

// !约束嵌套...
function copyFields<T extends U, U>(target: T, source: U): T {
  for (let id in source) {
    target[id] = (<T>source)[id];
  }
  return target;
}

let xx = { a: 1, b: 2, c: 3, d: 4 };

copyFields(x, { b: 10, d: 20 }); // { a: 1, b: 10, c: 3, d: 20 }

// !泛型函数
type Log = <T>(value: T) => T;

let log: Log = (value) => {
  console.log(value);
  return value;
};

log<number>(2); // 2
log("2"); // '2'
log(true); // <boolean>true

// !泛型接口
interface CreateArrayFunc<T> {
  <T>(length: number, value: T): Array<T>;
}

let createArray2: CreateArrayFunc<any>;
createArray2 = function <T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
};

createArray(3, "x"); // ['x', 'x', 'x']

// !泛型类
class Log3<T> {
  run(value: T) {
    console.log(value);
    return value;
  }
}

let log1 = new Log3<number>();
log1.run(1); // 1

let log2 = new Log3();
log2.run("1"); // '1'


