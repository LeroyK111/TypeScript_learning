/**
 * @author Leroy
 * !JavaScript 数据类型: String、Number、Boolean、Object（Array、Function）、Symbol、undefined、null
 * !typescript 新增类型：void、any、never、元组、枚举、高级类型
 * !变量的命名：只有$ _ 这两个符号可以打头，大驼峰WeGame，小驼峰weGame, 一般类都是大驼峰
 */

// 字符串
let str1: string = "sdajfl";

// 数字
// 可以指定变量类型(类型注解),同时直接赋值
let age: number;
age = 111;

// 布尔值
let bool1: boolean = true;

// undefined类型
let u: undefined = undefined;
// 赋予null常用空值
let n: null = null;

// 数组
// any任意的，但是没有数组方法
let list: any[] = [1, "2", 3.1, 4];
let list1: number[] = [12, 3, 4];

// 利用了逻辑类型
let list4: (number | string)[] = [1, "2"];
// let list2: [] = [1] // 这个就不成立
const mylist1: Array<string> = ["2", "2"];
const mylist2: Array<string | number> = [1, "2"];

// 特殊数据
let list3: Int16Array = new Int16Array(1);

// 元组(索引和类型必须一一对应)
let tuple: [number, string] = [0, "1"];

// 对象
let myobj: object = { a: 1 };
let myobj1: {} = { a: 1 };
let mylist3: Array<object> = [myobj, myobj1];
let myobj2: { a: number } = { a: 1 };

console.log(myobj);

let num: number = 22;

// symbol标识唯一对象
let s: symbol = Symbol();

// any任意类型
let x: any;
x = 1;
x = "a";
x = {};

let arr22: any[] = [1, "a", null];





// !解构交换变量，
[age, num] = [num, age];
// 数组解构
let data: any[] = [1, 2, 3, ...[4, 5, 6]];
// 对象解构
let objData: {} = { obj1: 1, ...{ obj: 2 } };

// 打印
console.log(age, num);
