
type Flatten<T> = T extends Array<infer U> ? U : T;

type FlattenedNumbers = Flatten<number[]>; // number

// 在此示例中，Flatten 类型检查提供的类型 T 是否为数组，如果是，则提取内部类型 U。


// 泛型与条件与类型推断变量。表示在 extends 条件语句中以占位符出现的用来修饰数据类型的关键字，被修饰的数据类型等用到的时候才能被推断出来
// 作用：获取参数，返回值，泛型 的类型
// 出现位置：参数、返回值、类型的泛型具体化类型上


type NameType<T> = T extends (param: infer P) => any ? P : T


