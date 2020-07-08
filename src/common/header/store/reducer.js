// 7️⃣-⑥：引入“常量”；
import {CHANGE_CLASS_NAME, RESUME_CLASS_NAME, CHANGE_LIST, CHANGE_PAGE} from "./actionTypes";

import {fromJS} from "immutable";

const defaultState = fromJS({  
  refresh: false,
  list: [],
  
  page: 1,
  totalPage: 1
})

export default (state=defaultState, action) => {
  if(action.type === CHANGE_CLASS_NAME) {
    return state.set("refresh", true); 
  }
  
  if(action.type === RESUME_CLASS_NAME) {
    return state.set("refresh", false); 
  }
  
  if(action.type === CHANGE_LIST) {
    return state.set("list", action.data).set("totalPage", action.totalPage)
  }
  
  // 7️⃣-⑦：编写返回的“数据”；
  if(action.type === CHANGE_PAGE) {
    return state.set("page", action.page);
  }
   
  return state;
}