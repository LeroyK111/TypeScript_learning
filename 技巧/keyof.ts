
type Point = { x: number; y: number };

type NullablePoint = {
  [K in keyof Point]: Point[K] | null;
};

// NullablePoint 成为一种新类型，具有与 Point 相同的键，但具有可为空的值。

// 获取类、对象、接口的所有属性名组成的联合类型。
type MyPerson = {
  name: string;
  age: number;
  hobbies: string[]
}

type ToReadonly<Obj> = {
  readonly [Key in keyof Obj]: Obj[Key]
}

type res = ToReadonly<MyPerson>
/**
type res = {
  readonly name: string;
  readonly age: number;
  readonly hobbies: string[];
}
 */
