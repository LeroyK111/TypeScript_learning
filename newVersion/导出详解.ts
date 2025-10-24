// 导出值和类型
export const myValue = 42; // 导出一个值
export interface MyInterface { x: number; } // 导出一个类型
export class MyClass { } // 同时导出值（构造函数）和类型（实例类型）

// 适用范围较窄
export type { MyInterface2 } from './module'; // 只导出类型 MyInterface
import { MyInterface2 } from "./module"
