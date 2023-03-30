// 声明全局变量
// declare var foo: number;
// console.log("Half the number of widgets is " + foo / 2);

// 全局函数
// declare function greet(greeting: string): void;
// greet("hello, world");

// 带属性的对象
declare namespace myLib {
  function makeGreeting(s: string): string;
  let numberOfGreetings: number;
}
let result1 = myLib.makeGreeting("hello, world");
console.log("The computed greeting is:" + result);

let count = myLib.numberOfGreetings;

// 复用接口 type = 等价于 interface
type GreetingSettings = {
  greeting: string;
  duration?: number;
  color?: string;
};

interface demo {}

declare function greet1(setting: GreetingSettings): void;

greet1({
  greeting: "hello world",
  duration: 4000,
});
