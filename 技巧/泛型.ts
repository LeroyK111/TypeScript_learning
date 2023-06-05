
type Flatten<T> = T extends Array<infer U> ? U : T;

type FlattenedNumbers = Flatten<number[]>; // number

// 在此示例中，Flatten 类型检查提供的类型 T 是否为数组，如果是，则提取内部类型 U。

