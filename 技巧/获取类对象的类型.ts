class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

// 获取对象的类型
function createPoint(Constructor: typeof Point, x: number, y: number) {
  return new Constructor(x, y);
}
