// 对某些文件检查
// @ts-check
// 禁止在文件的下一行显示 @ts-check 错误，预计至少存在一个错误。
// @ts-expect-error
// 单行忽略(添加到特定行的行前来忽略这一行的错误)
// @ts-ignore
// 跳过对某些文件的检查 (添加到该文件的首行才起作用)
// @ts-nocheck

// 对象未使用
const a = 1;
const _a = 1;
const __a = 1;
void a; // 表示这个变量未使用


