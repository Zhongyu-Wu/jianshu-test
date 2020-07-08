/*
2️⃣-①：从 redux 中引入 applyMiddleware 方法。
这个方法使得我们可以使用“中间件”；
 */
import { createStore, compose, applyMiddleware } from "redux";  

import reducer from "./reducer"; 

// 2️⃣-②：从 redux-thunk 库中引入 thunk 模块；
import thunk from "redux-thunk";

const composeEnhancers =

  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;



const enhancer = composeEnhancers(  

  applyMiddleware(thunk) // ❗️2️⃣-③：顺便把 thunk 通过 applyMiddleware 执行一下！

);

const store = createStore(
  reducer,
 
  enhancer 
  
  
);  

export default store; 