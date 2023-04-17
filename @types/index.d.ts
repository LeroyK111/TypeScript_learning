// ! 命名空间，解决重名问题。
// ? d.ts 文件中的顶级声明必须以 "declare" 或 "export" 修饰符开头。
// * 如果是.ts文件中的接口，则不需要declare
// todo 跨文件引用 /// <reference path = "IShape.ts" />

declare namespace name1 {
  export interface Data {
    b: object;
  }

  export interface Data2 {
    a: number;
  }

  // 嵌套写法，也是嵌套使用
  export namespace Data3 {
    export class point {
      constructor(x: number, y: number);
    }
  }
}

// !接口写法
interface data {
  a: number;
}
