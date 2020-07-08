import {fromJS} from "immutable";  

// 3️⃣-①：先引入“常量”；
import {CHANGE_LOGIN_DATA_ACTION, LOGOUT} from "./actionTypes";

const defaultState = fromJS({
  login: false // ❗️初始为“未登录”！
});

export default (state=defaultState, action) => {
  if(action.type === CHANGE_LOGIN_DATA_ACTION) {
    return state.set("login", action.login);
  };
  
  if(action.type === LOGOUT) {
  	// 3️⃣-②：编写替换“数据”的逻辑；
    return state.set("login", action.login);
  }
  
  return state;
}