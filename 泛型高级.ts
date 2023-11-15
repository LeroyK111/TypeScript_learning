// 泛型 (-类型中的函数) 是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性

function createArray<T>(length:number, value: T): Array<T> {
  let result: T[] = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}
// 1. 泛型接口
interface CreateArrayFunc {
  <T>(length:number, value: T): Array<T>
}
let createArray2: CreateArrayFunc
// 2. 泛型类 泛型参数带默认类型
class GenericNumber<T = string> {
  zeroValue: T;
  add: (x:T, y:T) => T
}
let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 1
myGenericNumber.add = (x, y) => x + y
// 3. 泛型约束
// 对输入参数进行校验，泛型中通过 extends 关键字实现

class Per {
  name: string;
}
function getName(user) {
  if (!(user instanceof Per)) {
    throw new Error(`${user} is not instanceof "Person"`);
  }
  return user.name;
}
type GetName<U extends Person> = U['name']
// 4. 泛型与条件判断
type IsBoolean<T> = T extends boolean ? true : false;
type AA = IsBoolean<true>; // true
type BB = IsBoolean<1>; // false
// 5. 泛型与条件与类型推断变量 infer
type ReturnType1<T> = T extends ((...args: any) => infer R) ? R : never;
type GetSum = (a: number, b: number) => number;
type A1 = ReturnType<GetSum> // number
// 6. ts内置泛型工具
// 1> Pick 挑选出指定属性，生成新对象类型
type UserInfo = Pick<Person, 'name' | 'age'>; // 挑选出 { name: string; age: number }

// 2> Omit 排除指定的属性，生成新的对象类型
type UserInfo2 = Omit<Person, 'id'>; // 排除 id，生成  { name: string; age: number }

// 3> Partial 将对象所有属性变为可选
type PartialPerson = Partial<Person>; // { name?: string; age?: number; id?: number }

// 4> Readonly 将对象所有属性变为只读
type ReadonlyPerson = Readonly<Person>; // { readonly name: string; readonly age: number; readonly id: number }

// 5> Record 生成对象类型，例如
type PersonMap = Record<number, Person>; // { [index: number]: Person }

// 6> Exclude 排除一些联合类型
type UserInfoKeys = Exclude<keyof Person, 'id'>; // 'name' | 'age'