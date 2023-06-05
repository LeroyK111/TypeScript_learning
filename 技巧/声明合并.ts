
// file1.ts
interface Point {
  x: number;
  y: number;
}

// file2.ts
interface Point {
  z: number;
}

// Merged Point type: { x: number; y: number; z: number }

let de: Point = {x: 0, y: 0, z: 0};

// 通过在 file1.ts 和 file2.ts 中声明 Point，TypeScript 会将两个声明合并为一个类型。 我认为这种行为只发生在 interface 关键字上，而不是 type 关键字，所以我更喜欢 type。