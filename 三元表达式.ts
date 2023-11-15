// 条件语句 三元表达式
type AA = 1 extends number ? 1 : never // 1
type IsRed = 'blue' extends 'red' ? true : false // false