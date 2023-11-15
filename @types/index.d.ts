// ! 命名空间，解决重名问题。
// ? d.ts 文件中的顶级声明必须以 "declare" 或 "export" 修饰符开头。
// * 如果是.ts文件中的接口，则不需要declare
// todo 跨文件引用 /// <reference path = "IShape.ts" />


// declare var 声明全局变量
// declare function 声明全局方法
// declare class 声明全局类
// declare enum 声明全局枚举类型
// declare namespace 声明（含有子属性的）全局对象
// interface 和 type 声明全局类型
// export 导出变量
// export default ES6默认导出
// export namespace 导出（含有子属性的）对象
// export = commonjs 导出模块
// export as namespace UMD库声明全局变量
// declare global 扩展变量
// declare module 扩展模块
/// <reference /> 三斜线指令


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
