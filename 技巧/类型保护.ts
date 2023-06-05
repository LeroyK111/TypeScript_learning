
function isString(value: any): value is string {
  return typeof value === "string";
}

function concat(a: unknown, b: unknown) {
  if (isString(a) && isString(b)) {
    return a.concat(b);
  }
}


// 在 concat 函数中，TypeScript 知道 a 和 b 是字符串，因为类型保护是 isString。 这也可以改进 VS Code Intellisense 的提示，因为编译器将能够约束任何类型。