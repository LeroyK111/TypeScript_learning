
const MyConstant = Symbol("MyConstant") as unique symbol;

type MyType = {
  [MyConstant]: string;
};

const obj: MyType = { [MyConstant]: "hello world" };

console.log(obj[MyConstant]); // "hello world"

// MyConstant 是一个独特的符号，确保没有其他属性可以与它冲突。
