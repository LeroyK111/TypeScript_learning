enum Player {
  // 不赋值，则默认从0自增
  Female,
  Male,
  Three,
  // 直接赋值，则后续会继续自增1
  Num = 1000,
  Num1 = "初始值",
}

let userGender: Player = Player.Female;

//  枚举成员值只读，不可修改。
// Player.Female = "男";

console.log(userGender);
console.log(Player.Female);
console.log(Player.Male);
console.log(Player.Three);
console.log(Player.Num);
console.log(Player.Num1);

// 纯数字枚举，可以反向映射
var Role;

(function (Role) {
  Role[(Role["Reporter"] = 1)] = "Reporter";
  Role[(Role["Developer"] = 2)] = "Developer";
  Role[(Role["Maintainer"] = 3)] = "Maintainer";
  Role[(Role["Owner"] = 4)] = "Owner";
  Role[(Role["Guest"] = 5)] = "Guest";
})(Role || (Role = {}));

// 使用变量声明
declare enum Month {
  Jan,
  Feb,
  Mar,
}
let month = [Month.Jan, Month.Feb, Month.Mar];


// 同时使用调用签名和构造签名
declare var Date: DateConstructor;


