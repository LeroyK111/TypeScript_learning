// 联合类型 and 类型别名
// 1. 联合类型
// 表示取值可以为多种类型中的一种

let username: string | number = 'yyy'
// 当ts不确定一个联合类型的变量到底是哪个类型的时候，我们只能“访问此联合类型所有类型里共有的属性或方法”

user1.toString()
// 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型

user1 = 20 // 推断成number
// 1.1 联合类型与泛型推导
// 例子中并不是将 'a' | 'b' | 'c' 一次性判断的，而是一个一个走的判断
type Foo<T> = T extends 'a' | 'b' ? `${T}1` : T
type Bar = Foo<'a' | 'b' | 'c'> // "a1" | "b1" | "c"
// 2. 类型别名
// 类型别名: type 既可以表示基础类型，也可以表示对象类型

type Name = string | number
let name1: Name = 123