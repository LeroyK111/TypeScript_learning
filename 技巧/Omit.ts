
interface Userx {
  id: number;
  username: string;
  email: string;
  password: string;
}


// Omit 实用程序函数通过从原始类型 T 中省略指定的属性 K 来创建新类型。当您有一个具有许多属性的类型，但您想创建一个没有某些属性的新类型时，这会很有用。
type UserWithoutPassword = Omit<Userx, 'password'>;


const userWithoutPassword: UserWithoutPassword = {
  id: 1,
  username: 'johndoe',
  email: 'john.doe@example.com',
};

