import x from "./x.js";
import png from "./assets/1.png";
console.log(png);

const div = document.getElementById("app");

div.innerHTML = `
    <img src="${png}">
`;

const button = document.createElement("button");
button.innerHTML = "懒加载";
div.appendChild(button);

// 懒加载
button.onclick = () => {
  // import 引入 lazy 里面的东西
  const promise = import("./lazy");
  promise.then(
    (module) => {
      // module
      const fn = module.default; // 默认值
      fn();
    },
    () => {
      console.log("模块加载失败");
    }
  );
};
