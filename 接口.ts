/**
 * !接口复用，约束对象类型
 * !interface创建接口，但是使用extend可以多继承，重名接口会自动覆盖合并
 * ?class只能单继承 - -
 */

interface rule {
  noName: null;
  // !可选类型: ?
  kexuan?: number;
  // !只读属性: readonly
  readonly onlyRead?: string;

}

interface User extends rule {
  name: string;
  age: number;
  sayHi: () => void;
  // !加入这个，即可将其他不想限定类型的数据，放入props中去了
  // props接口名罢了,可修改
  [props: string]: any;
  // ?可以专门获得对应类型的数据
  // [i: number]: string;
}

let p1: User = {
  name: "sdaf",
  age: 12,
  sayHi: () => {
    console.log("kid me");
  },
  noName: null,
  a: "1",
  b: [1, 2, 3, 4, "2"],
  c: { a: 1 },
  func: () => {
    console.log(1);
    return "ok";
  },
};
console.log(p1);

// console.log(p1.func());
