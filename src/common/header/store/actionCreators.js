// 7️⃣-③：引入“常量”；
import {CHANGE_CLASS_NAME, RESUME_CLASS_NAME, CHANGE_LIST, CHANGE_PAGE} from "./actionTypes";

import axios from "axios";

import {fromJS} from "immutable";

export const changeClassNameAction = () => ({
  type: CHANGE_CLASS_NAME
})

export const resumeClassNameAction = () => ({
  type: RESUME_CLASS_NAME
})

const changeListAction = (data) => ({
  type: CHANGE_LIST,
  data: fromJS(data),
  
  totalPage: Math.ceil(data.length / 10)  
})

export const initLabelAction = () => {
  return(dispatch) => {
    axios.get("/api/headerList.json")
      .then((res) => {
        const data = res.data
        
        const action = changeListAction(data.data);
        dispatch(action)
      })
      .catch(() => {alert("error")})
  }
}


// 7️⃣-④：定义 action；
export const changePageAction = (page) => ({
  type: CHANGE_PAGE,
  page: page
})