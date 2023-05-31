// ts-nocheck
window.addEventListener("load", (e: Event) => {
  // 开始游戏,初始化
  let start = document.querySelector("#start");
  let ul = document.querySelector("#bord");
  // 导入遮罩层对象
  let message = document.querySelector("#message");

  let userCheck: number = 0;
  let flag: boolean = false;
  var mouseFlag: boolean;
  let classCheck: string[] = ["o", "x"];

  var index: string;

  // 已经点击过的全部排除,不能被点击和鼠标扫过
  var click_box;
  var click0_box;
  var click1_box;

  // !初始化
  start.addEventListener("click", (starte: Event) => {
    // 用户初始化
    userCheck = 0;
    // 界面初始化
    for (const iterator of ul.children) {
      iterator.children[0].className = "";
    }
    flag = true;
    click_box = [];
    click0_box = [];
    click1_box = [];
  });

  // !li的索引
  function liIndex(li: object): string {
    if (li.getAttribute("data-index")) return li.getAttribute("data-index");
    return li.parentNode.getAttribute("data-index");
  }

  // !查找是否被点击
  function checkIndex(index: string) {
    return click_box.includes(index);
  }

  // !鼠标触发
  ul.addEventListener("mouseover", (mouseE: Event) => {
    if (flag && mouseFlag) {
      let li = mouseE.target;
      let lis = li.children;
      // 还要加判断，如果是被点击过的，还要return
      if (checkIndex(liIndex(li))) return null;

      let cas = classCheck[userCheck];
      if (lis.length === 0) {
        // li就是div本身
        lis.className = cas;
      } else {
        lis[0].className = cas;
      }
    }
    // 每次触发一次，其他li就不能再触发了，必须等到我触发了离开后才能再触发其他li
    mouseFlag = false;
  });

  // !鼠标离开
  ul.addEventListener("mouseout", (mouseE1: Event) => {
    mouseFlag = true;
    if (flag && mouseFlag) {
      let li = mouseE1.target;
      let lis = li.children;

      // 还要加判断，如果是被点击过的，还要return
      if (checkIndex(liIndex(li))) return null;

      if (lis.length === 0) {
        // li就是div本身
        lis.className = "";
      } else {
        lis[0].className = "";
      }
    }
  });

  var winnerArr = [
    ["0", "1", "2"],
    ["3", "4", "5"],
    ["6", "7", "8"],
    ["0", "3", "6"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["0", "4", "8"],
    ["2", "4", "6"],
  ];

  // 算法拆分
  function algorithm(winner: string[], ruselt: number[]) {
    let num_0 = 0;
    let num_1 = 0;

    for (const item of winner) {
      if (click0_box.includes(item)) {
        num_0 += 1;
      }
      if (click1_box.includes(item)) {
        num_1 += 1;
      }
    }

    // 把判断放外面
    if (num_0 == 3) {
      return ruselt[1];
    } else if (num_0 < 3 && num_1 == 3) {
      return ruselt[2];
    }
  }

  // 判断赢
  function outcome_to_determine() {
    let ruselt = [-1, 0, 1];
    if (click_box.length >= 5) {
      // 算法
      for (const winner of winnerArr) {
        let res = algorithm(winner, ruselt);
        if (ruselt.includes(res)) {
          return res;
        }
      }
      if (click_box.length == 9) {
        return -1;
      }
    } else {
      return null;
    }
  }

  // 显示遮罩
  function mask(params: string) {
    message.children[0].innerHTML = params;
    message.style.display = "block";
    let restart = message.children[1];

    restart.addEventListener("click", (event: Event) => {
      message.style.display = "none";
      start.click();
    });
  }

  // !鼠标点击后将状态完全赋予，不能被修改
  ul.addEventListener("click", (mouseE2: Event) => {
    if (flag) {
      let li = mouseE2.target;
      // 阻止冒泡,就阻止了事件该li的事件委托
      let lis = li.children;

      // 还要加判断，如果是被点击过的，还要return
      if (checkIndex(liIndex(li))) return null;

      let cas = classCheck[userCheck];
      if (lis.length === 0) {
        lis.className = cas;
        index = liIndex(li);
      } else {
        lis[0].className = cas;
        index = liIndex(li);
      }

      // 通过用户加入不同的用户数组
      click_box.push(index);
      if (userCheck === 0) {
        click0_box.push(index);
      } else {
        click1_box.push(index);
      }

      // 获胜判断
      let result = outcome_to_determine();

      // 调用遮罩
      switch (result) {
        case -1:
          mask("平局!");
          break;
        case 0:
          mask("O获胜!");
          break;
        case 1:
          mask("X获胜!");
          break;
        default:
          break;
      }

      // 最后别忘了修改用户
      userCheck = userCheck === 0 ? 1 : 0;
    }
  });
});
