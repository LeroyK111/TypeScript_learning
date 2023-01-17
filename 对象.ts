// 普通对象，等号和逗号分割
let obj: object = {
  name: "leroy",
  age: 1,
  sayHi: () => {
    console.log("hi");
  },
};

let obj3: {} = { a: 1 };

console.log(obj);


// 对象类型注解语法，冒号和分号
let person: {
  name: string;
  age: number;
  // ？不定变量
  sayHi?: Function;
};

// 和注解相匹配
person = {
  name: "刘老师",
  age: 1,
  sayHi: () => {
    console.log("我被规定了");
  },
};


// !合并写法
let person2: {
  name: string;
  age: number;
  sayHi: Function;
} = {
  name: "刘老师",
  age: 1,
  sayHi: () => {
    console.log("我被规定了");
  },
};

console.log(person);
