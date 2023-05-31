interface Person1 {
  firstName: string;
  lastName: string;
  age: number;
  address: Address1;
}


interface Address1 {
  street: string;
  city: string;
  state: string;
  zip: string;
}


/**
 * Partial函数允许您通过将原始类型 T 的所有属性设为可选来创建新类型。当您有一个具有许多属性的复杂类型时，这会很有用，但您只需要在特定的上下文中提供其中的一些。
*/
type PartialPerson = Partial<Person1>;

const partialPerson: PartialPerson = {
  firstName: "First Name",
  age: 11,
};


/**
 * Required 实用程序函数通过使原始类型 T 的所有属性成为必需来创建新类型。当您有一个带有可选属性的类型，但您希望确保在特定上下文中提供所有属性时，这可能很有用。
*/
type RequiredPerson = Required<Person1>;


const requiredPerson: RequiredPerson = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '12345'
  }
};

