
function log<This, Args extends any[], Return>(
  target: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<
    This,
    (this: This, ...args: Args) => Return
  >
) {
  const methodName = String(context.name);

  function replacementMethod(this: This, ...args: Args): Return {
    console.log(`LOG: Entering method '${methodName}'.`);
    const result = target.call(this, ...args);
    console.log(`LOG: Exiting method '${methodName}'.`);
    return result;
  }

  return replacementMethod;
}

class Calculator {
  @log
  add(a: number, b: number): number {
    return a + b;
  }
}
// "LOG: Entering method 'add'." 
// "LOG: Exiting method 'add'." 
// 5
const calculator = new Calculator();
console.log(calculator.add(2, 3)); 