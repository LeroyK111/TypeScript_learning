
declare const symbolMethodName: symbol;

export class A {
    [symbolMethodName]() { return 1 };
}

export class A {
  [x: symbol]: () => number;
}
