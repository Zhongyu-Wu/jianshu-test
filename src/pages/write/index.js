import React, {PureComponent} from "react";

import {
  WriteWrapper,
  Title,
  Editor
} from "./style";

/*
2️⃣-②：从 react-redux 中引入 connect 方法（它也是 React-redux 的核心 API 之一），
connect 的目的很明确——就是“连接”的意思！
 */
import {connect} from "react-redux";

/*
❗️❗️❗️2️⃣-⑭：幸运的是，react-reouter-dom 为我们提供了一个“组件”——Redirect，
它可以直接“重定向”至目的页；
 */
import {Redirect} from "react-router-dom";

class Write extends PureComponent {
  render() {
    
    /*
    ❗️❗️❗️2️⃣-⑨：“映射”上了过后，我们就可以通过调用 this.props.login 来“调用”
    store 中的 login 了！
    注释掉下边的代码~
    return(
      <WriteWrapper>
        <Title placeholder="输入标题" />
        <Editor>
          <textarea placeholder="输入内容"></textarea>
        </Editor>
      </WriteWrapper>
    )
     */
    // ❗️❗️❗️2️⃣-⑩：取而代之，我们用一个“条件判断”来决定“页面渲染”和“路由跳转”；
    if(this.props.login) { // 2️⃣-⑪：如果为“已登录”状态，则“渲染”出“写文章页”；
      return(
        <WriteWrapper>
          <Title placeholder="输入标题" />
          <Editor>
            <textarea placeholder="输入内容"></textarea>
          </Editor>
        </WriteWrapper>
      )
    }else { // 2️⃣-⑫：否则（为“未登录”状态），则“重定向”至“登录页”；
      // ❓2️⃣-⑬：怎样“重定向”至“登录页”呢？
      
      // 2️⃣-⑮：我们用“Redirect 组件”来“重定向”至“登录页”；
      return <Redirect to="/login" />; // ❗️❗️❗️注意标签的闭合！
    }
  }
}

// 2️⃣-⑥：接下来，我们先定义“连接”的“规则”；
const mapStateToProps = (state) => { /*
																		 2️⃣-⑦：把 store 里的“数据 state”作为“参数”
                                     传递给 mapStateToProps；
																			*/
  
  return { // ❗️这个规则会返回一个“对象”出去！
		login: state.getIn(["login", "login"]) /*
    																			 ❗️❗️❗️2️⃣-⑧：“规则”的具体做法为——将 store 
                                           里的 login 映射到“Write 组件”里的 props 的
                                           login 中去；
    																				*/  
  }

}


/*
2️⃣-③：之前我们直接导出的是 Write，可用了 React-redux 后，就不能这样写了！
export default Write;
 */

/*
2️⃣-④：取而代之，我们是导出 connect 方法（
❗️注意看我们给 connect 方法传递了哪些参数！）
 */
export default connect(mapStateToProps, null)(Write); /*
																			2️⃣-⑤：我们一共要给 connect 方法传递 3 个参数！
                                      Write 表示：connect 会让“Write 组件”和 store 进行
                                      “连接”；
                                      
                                      mapStateToProps 表示：“Write 组件”和 store 进行
                                      “连接”是需要“规则”的，而具体的“规则”就在这个 
                                      mapStateToProps 里边（❗️直译为：把 store 里边的
                                      “数据 state”映射到“Write 组件”的 props 里）；
                                      
                                      null 表示：这里还会接收一个名叫 mapDispatchToProps
                                      的参数，由于这里不涉及到“修改数据”，故用 null 占位。
																											 */