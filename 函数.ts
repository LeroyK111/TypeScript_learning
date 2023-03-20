// 标准函数返回值
function noReturn(): void {
  console.log("No return value");
}

// 隐式函数
let add = (x: number, y: number = 2): number => x + y;

// !原型，也可以加入?变为可选参数,可选参数必须在必选参数之后
let plus: (x: number, y?: number) => number;
plus = (a, b) => a + b;

// 不定参数
function add1(x: number, ...rest: number[]) {
  return x + rest.reduce((prev, curr) => prev + curr);
}
add1(1, 2, 3); // 6

// never 报错，死循环，从来不会出现的值
let error = (): never => {
  throw new Error("error");
};
let endless = (): never => {
  while (true) {}
};

// !直接形参声明
function text(nums: number = 1, obj: string[] = null, ...list: any): object {
  console.log(nums);
  console.log(obj);
  console.log(list);
  // !return可以终结函数的继续执行，回调函数和异步函数除外。
  return {
    status: 0,
    mes: "ok",
  };
  // !没有返回值时，默认返回void
  // return void
}

// !函数接口模式
interface IFunc {
  (nums: number, obj: string[], ...list: any): {};
}

// 这里使用了快捷=>方法
let test2: IFunc = (nums, obj, ...list) => {
  console.log(nums);
  console.log(obj);
  console.log(list);

  return {
    a: 1,
  };
};

let result3: object = test2(12, ["2"], 1, 2, "123", [213], { a: 2 });
console.log("测试", result3);

text();
// 这里是传入实参，确定返回结果，和python一样
let result: object = text(2323, ["okj", "wekl", "jdlkfl"], "23123", 1212);
console.log(result);

// !常规接口
interface List {
  readonly id: number;
  name: string;
  age?: number;
}

interface Result {
  data: List[];
}

function render(result: Result) {
  console.log(JSON.stringify(result));
}

render({
  data: [
    { id: 1, name: "A", sex: "male" },
    { id: 2, name: "B" },
  ],
  // 使用as断言类型,避免类型缺失和异常
} as Result);

// 尖括号也是断言
render(<Result>{
  data: [
    { id: 1, name: "A", sex: "male" },
    { id: 2, name: "B" },
  ],
});

/**
 * *函数重载。写文档专用
 */

function add2(...rest: number[]): number;
function add2(...rest: string[]): string;
function add2(...rest: any[]): any {
  let first = rest[0];
  let type = typeof first;
  switch (type) {
    case "number":
      return rest.reduce((prev, curr) => prev + curr);
    case "string":
      return rest.join("");
  }
  return null;
}

// !类型保护函数

class Java {
  helloJava() {
    console.log("hello java");
  }
  java: any;
}

class JavaScript {
  helloJavaScript() {
    console.log("hellp javascript");
  }
  javascript: any;
}

function isJava(lang: Java | JavaScript): lang is Java {
  return (lang as Java).helloJava !== undefined;
}

let lang = new Java();

if (isJava(lang)) {
  lang.helloJava();
} else {
  lang?.helloJavaScript();
}


// 箭头函数
type LogFn = (msg: string) => void;
const log: LogFn = (msg: string) => {
  console.log(msg);
};