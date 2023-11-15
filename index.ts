/// <reference path = "@types/index.d.ts" />
// !引入声明文件的语法，保证文件名的相同，可以不用这种语法. index.ts --> index.d.ts
// string, number, boolean, null, undefined, any, never, enum(枚举), array(数组), tuple(元组), object, void

// ✨ never类型是所有类型的子类型

// ✨ undefined 在 tsconfig strictNullChecks 为 true 的情况下是 void 和 any 类型子类型，为 false 的情况下则除 never 的子类型


let b: number = 123;

let Data: data = {
  a: 1,
};

console.log(Data);


// 其他

// 从 js 值转为 ts 值
const jack1 = {
  name: 'jack',
  age: 18
}

// 从 JS 中获取 TS 并赋值
type Person20 = typeof jack1; // 此时 Person 为 { name: string; age: number }

// 使用到 as const 语法，让其尽可能精准的推测
const jack2 = {
  name: 'jack',
  age: 18

} as const; // 会被推导为：{ readonly name: "jack"; readonly age: 18; }
const arr = [1, 2] as const;  // 会被推导为：readonly [1, 2];