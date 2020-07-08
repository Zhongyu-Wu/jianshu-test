import {fromJS} from "immutable";

// 7️⃣-①：先引入“常量”；
import {CHANGE_DETAIL_DATA_ACTION} from "./actionTypes";

const defaultState = fromJS({
  title: "",
  content: ""
});

export default (state=defaultState, action) => {
  
  // ❗️7️⃣-②：编写替换“数据”的逻辑；
  if(action.type === CHANGE_DETAIL_DATA_ACTION) {
    return state.merge({
      title: action.title,
      content: action.content
    })
  }
  
  return state;
}