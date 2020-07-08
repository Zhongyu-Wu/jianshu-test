import Loadable from 'react-loadable';

/* 3️⃣-③：先删除下面这行代码，我们暂时不做详细的“Loding”组件；
import Loading from './my-loading-component';
 */

// ❗️3️⃣-⑦：引入 React，以便使用 JSX 语法；
import React from "react";

const LoadableComponent = Loadable({ // 3️⃣-③：这行代码创建了一个“异步组件”；
  
  /*
  3️⃣-④：下面这行代码指，将要把哪个“组件”放到这个“异步组件”中进行“异步”加载。
  先注释掉下面这行代码，因为我们要加载的当前目录下的 index.js（即，Detail 组件）~
  loader: () => import('./my-component'),
   */
  loader: () => import("./"), /*
                             ❗️❗️❗️注意这里边的 import 和最上边的“import 引入”
                              是不一样的东西。这个 import 是“异步加载”的一个新语法！
                               */
  
  /*
  3️⃣-⑤：下边这个 loading 是指，当我们从“首页”进入“详情页”，
  页面需要加载这个“详情页”，“加载”的过程中，我们可以在页面上
  临时显示一些内容，如“别慌，我正在加载~”等；
  
  注释掉下面这行代码，我们没单独写这个“Loading 组件”，而是直接用 JSX 写一些“内容”即可。
  loading: Loading,
   */
  loading() {
    // 3️⃣-⑥：下边就要用到 JSX 的语法，所以我们必须先去上边把 React 引入进来；
    return(
      
      // 3️⃣-⑧：接下来就可以用 JSX 语法来写加载过程中“临时显示”的一些内容；
      <div>别慌，我正在加载~</div>
    )
  }
});


/*
3️⃣-⑨：最后，导出了一个“无状态组件”。我们可以通过“无状态”组件的特性来简写下边的代码，
以提高性能；
export default class App extends React.Component {
  render() {
    return <LoadableComponent/>;
  }
}
 */
export default () => <LoadableComponent/>