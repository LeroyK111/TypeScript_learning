
type TupleToUnion<T extends any[]> = T[number];

type MyTuple = [string, number, boolean];

type MyUnion = TupleToUnion<MyTuple>; // string | number | boolean


// 在此示例中，TupleToUnion 将元组类型转换为联合类型，这在处理复杂数据结构时非常有用。

// 就个人而言，我更喜欢联合类型而不是枚举，以至于我会将我看到的任何枚举重构为联合类型。 智能感知更好！