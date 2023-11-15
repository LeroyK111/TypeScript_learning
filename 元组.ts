// 元组是个数有限、类型固定的数组类型

let tom1: readonly [string, number] = ['Tom', 25]
// 2.1 合并两个元组
type Concat<T extends any[], U extends any[]> = [...T, ...U]
type Res = Concat<[1], [2, 3]> // [1, 2, 3]
2.2 元组的遍历：递归方式，对象类型遍历方式
两种处理方式都能遍历到每个元素，并对每个元素做一些判断和处理。除了在会增加元素数量的情况下，必须使用递归的模式，其它情况可任选

// （1）用递归思想解决元组拍平问题

type Flatten<T extends any[]> = T extends [infer First, ...infer Rest]
  ? (First extends any[]
    ? [...Flatten<First>, ...Flatten<Rest>]
    : [First, ...Flatten<Rest>])
  : []

type Res = Flatten<[1, [[2]]]> // [1,2]
（2） 希望 [1, () => number, string] 能够被处理成 [1, number, string]

type GetType<T extends any[]> = {
  [K in keyof T]: T[K] extends () => infer R ? R : T[K]
}

type Res = GetType<[1, () => number, string]> // [1, number, string]
// 2.3 元组与索引与联合类型
type tupleStr = ['a', 'b', 'c']

type AAA = tupleStr[0]; // 'a'
type BBB = tupleStr[1]; // 'b'
// 因为 number 代表了可能是 0 也可能是 1 或者 2，所以这些可能性组成的集合就是联合类型
type UnionStr = tupleStr[number]; // 'a' | 'b' | 'c' 变成了联合类型