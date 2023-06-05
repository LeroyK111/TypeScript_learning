
type Curried<T, U> = (arg: U) => T & U;

function merge<T, U>(fn: Curried<T, U>): T & U {
  return fn({} as U);
}

type UserDetails = { firstName: string; lastName: string };
type UserSettings = { theme: string; language: string };

const result = merge<UserDetails, UserSettings>(() => ({
  firstName: 'John',
  lastName: 'Doe',
  theme: 'dark',
  language: 'en',
}));

console.log(result);

// 在此示例中，我们有两种不同类型的对象，UserDetails 和 UserSettings。 通过使用 merge 函数，我们可以将这两种类型组合成一个包含两种类型属性的对象。 当您想要创建一个新对象来组合来自多个来源的属性，同时仍保持 TypeScript 类型完整时，这会很有用。

// 当然，在 TypeScript 中还有其他方法可以实现这一点，例如，使用类型交集和直接扩展语法。 此示例的主要目的是演示类型柯里化的概念，当在正确的上下文中应用时，它可以成为一种强大的技术。
