<<<<<<< HEAD
enum HttpMethod {
  Get,
  Post,
}

type method = keyof typeof HttpMethod;

// const method: typeof HttpMethod = {
//   Get: 0,
//   Post: 1,
// };



enum E {
  A = 10 * 10, // Numeric literal enum member
  B = 'foo', // String literal enum member
  C = Math.random(), // Opaque computed enum member
}

function getStringValue(e: E): string {
  return String(e);
}

=======
enum HttpMethod {
  Get,
  Post,
}

type method = keyof typeof HttpMethod;

// const method: typeof HttpMethod = {
//   Get: 0,
//   Post: 1,
// };



enum E {
  A = 10 * 10, // Numeric literal enum member
  B = 'foo', // String literal enum member
  C = Math.random(), // Opaque computed enum member
}

function getStringValue(e: E): string {
  return String(e);
}

>>>>>>> b1e8f3ab43816b47df0b07cfabe48b6b3458468c
const val = getStringValue(E.A); // "100"