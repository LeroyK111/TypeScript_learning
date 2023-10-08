/*
! 两种方式，可以指定断言。解决类型不确定时，我们可以强制指定类型。
*值 as 类型 // 推荐用法
*<类型>值

*/

interface Cat {
  name: string;
  run(): void;
}
interface Fish {
  name: string;
  swim(): void;
}

let animal = {
  name: "1",
  swim: () => {
    console.log(111);
  },
};

function isFish(animal: Cat | Fish) {
  // !方法1, as
  // 直接断定animal属于Fish,然后判断他的类型
  if (typeof (animal as Fish).swim === "function") {
    return true;
  }

  // !方法二, 对象前加<Cat>
  if (typeof (<Cat>animal).run === "function") {
    return true;
  }

  return false;
}

let resultDome: boolean = isFish(animal);

console.log(resultDome);

/*
! const杀手级用法用法，直接让所有的对象只读。不可修改。
! 对于redux的初始化数据，特变有用
*/

let obj123 = {
  x: 10,
  y: [20, 30],
  z: {
    a: { b: 42 },
  },
} as const;

let obj321: {
  readonly x: 10;
  readonly y: readonly [20, 30];
  readonly z: {
    readonly a: {
      readonly b: 42;
    };
  };
};

// !断言可以直接写在接口上
type HasNames = { names: readonly string[] };
function getNamesExactly<const T extends HasNames>(arg: T): T["names"] {
  return arg.names;
}

const names = getNamesExactly({ names: ["Alice", "Bob", "Eve"] });


// 类型断言


const unknownValue: unknown = "hello world";

const stringValue: string = unknownValue as string;