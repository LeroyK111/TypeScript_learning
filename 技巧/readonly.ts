
interface Users {
  id: number;
  username: string;
  email: string;
  password: string;
}


type ReadonlyUser = Readonly<User>;


const user: ReadonlyUser = {
  id: 1,
  username: 'johndoe',
  email: 'john.doe@example.com',
  password: 'password123'
};

user.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.