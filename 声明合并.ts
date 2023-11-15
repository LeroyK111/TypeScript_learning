/**
 * @author Leroy
 * !尤其是开源库的@types 不严谨时，最好用这个
*/

// 1. 函数的合并
function reverse(x:number):number
function reverse(x:string):string
function reverse(x: number | string): number | string {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('')
  }
  return 0
}
// 2. 接口的合并
interface Alarm2 {
  price: number
  alert(s: string): string
}
interface Alarm2 {
  weight: number
  alert(s: string, n: number): string
}

// 想当于
interface Alarm2 {
  price: number
  weight: number
  // 接口中方法的合并，与函数的合并一样
  alert(s: string): string
  alert(s: string, n: number): string;
}
// 类的合并 类的合并与接口的合并规则一致