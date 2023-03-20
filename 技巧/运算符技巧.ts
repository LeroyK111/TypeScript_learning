// type Person = {
//   name: string;
//   email: string;
//   address: {
//     gis: string;
//     geo: {
//       lat: string;
//       lng: string;
//     };
//   };
// };

const man = {
  name: "man",
  email: "man@example.com",
  address: {
    gis: "sdlkjfk",
    geo: {
      lat: 10,
      lng: 20,
    },
  },
};

// 使用typeof，可以自定义对象属性
type Person = typeof man;
type Address = Person["address"];


