
class Shape {
  constructor(public id: string) {}
}

class Circle extends Shape {
  constructor(
    public id: string, 
    public radius: number) {
   super(id);
  }
}

class Square extends Shape {
  constructor(
    public id: string, 
    public sideLength: number) {
      super(id);
  }
}

// 在printShapeInfo函数体中，我们使用instanceof运算符来缩小形状参数的类型，从而输出不同形状的信息。在 if...else if 分支之外，我们只能访问 Circle 对象和 Square 对象共有的 id 属性。
function printShapeInfo(shape: Shape) {
  if (shape instanceof Circle) {
    console.log(`Circle's radius is: ${shape.radius}`);
  } else if (shape instanceof Square) {
    console.log(`Square's sideLength is: ${shape.sideLength}`);
  }
}