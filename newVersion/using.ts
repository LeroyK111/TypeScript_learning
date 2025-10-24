// 对于 Next.js 应用来说，这个功能特别有用。api 路由中的资源泄漏问题可以得到很好的解决。即使代码执行过程中出现异常，using 也会确保资源被正确清理。

async function fetchUserData(userId: string) {
  using db = await connectToDatabase();
  using cache = new RedisConnection();

  const user = await db.users.findById(userId);
  await cache.set(`user:${userId}`, user);
  return user;
} // 函数结束时自动释放 db 和 cache


