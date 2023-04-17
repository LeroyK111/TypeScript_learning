/*
手动使用语句进行自动监听，转义文件
tsc -w ts/text.ts --outDir js/
*/

window.onload = () => {
  let box = document.querySelector(".box");
  // ts的话可以指定属性
  box.addEventListener("click", (e: Event) => {
    console.log(e.target);
    alert("我被点击了");
  });
};
