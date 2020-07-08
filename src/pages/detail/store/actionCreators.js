import axios from "axios";

import {CHANGE_DETAIL_DATA_ACTION} from "./actionTypes";

import {fromJS} from "immutable";


const changeDetailDataAction = (result) => ({
  type: CHANGE_DETAIL_DATA_ACTION,

  title: fromJS(result.title),
  content: fromJS(result.content)
})


export const getDetailData = (id) => { // ❗️4️⃣-⑤：接收到这个 id；
  
  return(dispatch) => {
    
    /*
    ❗️❗️❗️4️⃣-⑥：然后在请求“接口”时，我就可以把这个 id 传给后端；
    axios.get("/api/detailData.json")
     */
    axios.get("/api/detailData.json?id=" + id) // ❗️❗️❗️
      .then((res) => {
        const result = res.data.data;
      
        const action = changeDetailDataAction(result);
      
        dispatch(action); 
      })
      .catch(() => {alert("error")})
  }
}