
type User = { name: string; age: number };
type ReadonlyUser = Readonly<User>;

const user: ReadonlyUser = { name: "Alice", age: 30 };

user.age = 31;
// Error: Cannot assign to 'age' because it is a read-only property

// 通过使用 Readonly 实用程序，我们确保用户对象不会发生变化。
const numbers: ReadonlyArray<number> = [1, 2, 3];