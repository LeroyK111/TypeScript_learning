// 交叉类型
interface DogInterface {
  run(): void;
}
interface CatInterface {
  jump(): void;
}
let pet: DogInterface & CatInterface = {
  run() {},
  jump() {},
};

// 联合类型
let a1: number | string = 1; // or '1'

// 索引类型
interface Obj {
  a: number;
  b: string;
}
let key: keyof Obj; // let key: "a" | "b"

// 映射类型
interface Obj2 {
  a: string;
  b: number;
  c: boolean;
}

// 接口所有属性设置映射成只读
type ReadonlyObj = Readonly<Obj2>;

// 条件类型
type TypeName<T> = T extends string
  ? "string"
  : T extends number
  ? "number"
  : T extends boolean
  ? "boolean"
  : T extends undefined
  ? "undefined"
  : T extends Function
  ? "function"
  : "object";

type T1 = TypeName<string>; // type T1 = "string"
type T2 = TypeName<string[]>; // type T2 = "object"


