enum HttpMethod {
  Get,
  Post,
}

type method = keyof typeof HttpMethod;

// const method: typeof HttpMethod = {
//   Get: 0,
//   Post: 1,
// };
