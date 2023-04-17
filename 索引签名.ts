interface User {
  name: string;
  sex?: string;
  // 方法
  say(words: string): void;
  // 索引签名语法
  [propName: string]: any;
}

let UserInfo: User = {
  name: "Bytefer",
  sex: "male",
  age: 30,
  email: "bytefer@gmail.com",
  sayHi: function (): void {
    throw new Error("Function not implemented.");
  },
  noName: null,
  say(words: string) {
    console.log(words);
  },
};




// new 构造签名
interface PointConstructor {
  new (x: number, y: number): { x: number; y: number };
}
function createPoint(ctor: PointConstructor, 
  x: number = 0, y: number = 0) {
  return new ctor(x, y);
}
class Point {
  constructor(public x: number, public y: number) {}
}
const zero = createPoint(Point);
console.log(zero);