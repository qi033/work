// export let index = {
//     name:"张三"
// }
const site = "好前程";
const func = function () {
  return "is a module function";
};
class User {
  show() {
    console.log("user.show");
  }
}
export { site, func, User };
