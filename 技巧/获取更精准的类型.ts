let user1 = {
  id: 111,
  name: "hash"
}
// 这还是属于推测答案
type U1 = typeof user1

let user2 = {
  id: 666,
  name: "john"
} as const // 加入断言后，即可成功
type U2 = typeof user2