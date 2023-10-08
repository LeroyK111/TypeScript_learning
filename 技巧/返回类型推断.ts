
type MyFunction = (x: number, y: number) => { result: number };

type MyFunctionReturnType = ReturnType<MyFunction>; // { result: number }


// MyFunctionReturnType 成为 MyFunction 的推断返回类型。