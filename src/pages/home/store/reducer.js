import {fromJS} from "immutable"; 

// ❗️❗️❗️先引入“常量”！
import {INIT_HOME_DATA, ADD_HOME_DATA, CHANGE_SHOW_TO_TOP} from "./actionTypes";

const defaultState = fromJS({
  labelList: [],
  articleList: [],
  panelsList: [],
  articlePage: 1,
  
  showToTop: false // ❗️❗️❗️初始为“不显示”!
  
})

export default (state=defaultState, action) => {  
  if(action.type === INIT_HOME_DATA) {
    return state.merge({  
      labelList: action.labelList,
      articleList: action.articleList,
      panelsList: action.panelsList
    })
  };
  
  if(action.type === ADD_HOME_DATA) {
    return state.merge({
      "articleList": state.get("articleList").concat(action.moreArticleList),
      "articlePage": action.nextPage
    })
  };
  
  // 3️⃣-⑩：当reducer 接收到 action 后，需要告诉 store 怎样“改变数据”；
  if(action.type === CHANGE_SHOW_TO_TOP) {
    return state.set("showToTop", action.show);
  }
  
  return state;
};