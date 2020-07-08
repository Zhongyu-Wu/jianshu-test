import React, { PureComponent } from "react";

import {GlobalStyle} from "./style";

import {GlobalIconStyle} from "./static/iconfont/iconfont";

import {BrowserRouter, Route} from "react-router-dom";

import Header from "./common/header";
import Home from "./pages/home";

// ❗️5️⃣-②：这里引入的是一个“异步组件”；
import Detail from "./pages/detail/loadable.js";


import Login from "./pages/login";

import Write from "./pages/write";

import { Provider } from "react-redux";
import store from "./store";

class App extends PureComponent  {  
  render() {  
    return (
      <div>
        <GlobalStyle />
        <GlobalIconStyle />
 
        <Provider store={store}>             
          <BrowserRouter>
            <div>
              <Header />     
              <Route path="/" exact component={Home}></Route>
							
							{/*
               ❗️❗️❗️5️⃣-③：还记得 Route 是什么东西吗？
               Route 就是“一条条的路由规则”：
                 path 指页面要跳转的路径；
                 exact 指“路径”必须“精确”地匹配才“跳转”；
                 component 指将“渲染”的内容替换为等号后边的“组件”。
                 
               ❗️❗️❗️发现没有？由于上一步引入的是“异步组件”，那这里“渲染”的也就是
               上边 loadable.js 中转换后的“异步”Detail 组件。简言之，这里的 Route
               对应的是“异步”Detail 组件。
               
               既然如此，pages 目录下 detail 文件夹里的 index.js 文件中的“Detail 组件”
               是获取不到 Route 里的 id 参数的！
                */}
              <Route path="/detail/:id" exact component={Detail}></Route>

              <Route path="/login" exact component={Login}></Route>
              <Route path="/write" exact component={Write}></Route> 
            </div>
          </BrowserRouter>
        </Provider>

      </div>
    );
  }
}

export default App; 