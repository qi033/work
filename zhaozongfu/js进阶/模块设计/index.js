/* export let index = {
    name: "明天会更好"
  }; */
/* export const site = "好前程";
export const func = function () {
  return "is a module function";
};
export class User {
  show() {
    console.log("user.show");
  }
} */
/* const site = "好前程";
const func = function() {
  console.log("is a module function");
};
class User {
  static show() {
    console.log("user.show");
  }
}
export { site, func, User as default }; */
export * as hqc1 from "./index1.js";
// 默认模块需要单独导出
export { default as hqc2 } from "./index2.js";
// 以下方式导出默认模块是错误的
// export obj from "./index2.js";