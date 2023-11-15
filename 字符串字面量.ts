// 字符串字面量类型
// 字符串字面量类型用来约束取值只能是某几个字符串中的一个

// 3.1 类型别名与字符串字面量类型都是使用 
type 进行定义#
type EventNames = 'click' | 'scroll' | 'mousemove'
function handleEvent (ele: Element, event: EventNames) {
  // do something
}
// 3.2 字符串操作：字符串类型推导与解构#
// （1）推导类型中油字符串字面量的情况

// 实现一个将字符串类型中 _ 去除的功能，其可以为：
type DelUnderline<T extends string> = T extends `${infer LeftWords}_${infer RightWords}`
  ? `${LeftWords}${RightWords}`
  : T
type HelloWorld = DelUnderline<'hello_world'> // helloworld（LeftWords 为 hello，RightWords 为 world）
type World = DelUnderline<'_world'> // world（LeftWords 为空字符串，RightWords 为 world）
type Hello = DelUnderline<'hello_'> // hello（LeftWords 为 hello，RightWords 为空字符串）
（2）推导类型中无字符串字面量的情况

// 实现 TS 类型的首字母大写的效果，其可以为：
type MyCapitalize<T extends string> = T extends `${infer First}${infer Rest}`
  ? `${Uppercase<First>}${Rest}`
  : T;
type A19_2 = MyCapitalize<'hello'>; // "Hello"（First 为 "h"，Rest 为 "ello"）
type B = MyCapitalize<'b'>; // "B" （First 为 "h"，Rest 为空字符串）
type C = MyCapitaliz
e<''>; // 当为空字符串时，会走到 false 的分支，返回空字符串