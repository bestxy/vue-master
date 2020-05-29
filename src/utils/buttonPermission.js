import store from "../store/index";
export function buttonPermission(permission){
    const roles = store.getters["app/roles"]; // 获取角色
    const button = store.getters["app/buttonPermission"];
    if(roles.includes("admin")) { return true }
    return button.indexOf(permission) != -1; //
}
// 2.0