import React, {PureComponent} from "react";

import {
  LoginWrapper,
  LoginBox,
  Input,
  Button
} from "./style"

import {connect} from "react-redux";

import {actionCreators} from "./store";

/*
❗️❗️❗️1️⃣-⑨：幸运的是，react-router-dom 为我们提供了一个“组件”——Redirect,
它可以直接“重定向”至目的页；
 */
import {Redirect} from "react-router-dom";


class Login extends PureComponent {
  render() {
    
    /*
    ❗️❗️❗️1️⃣-⑤：“映射”上了过后，我们就可以利用 this.props.login 来做一个
    条件判断；
    注释掉下面的代码~
    return(
      <LoginWrapper>
        <LoginBox>
          <Input type="text" placeholder="账号" ref={(input) => {this.text = input}} />
          <Input type="password" placeholder="密码" ref={(input) => {this.password = input}}  />
          
          <Button type="submit" onClick={() => this.props.handleLogin(this.text, this.password)}>登陆</Button>
        </LoginBox>
      </LoginWrapper>
    )
     */
    if(!this.props.login) { // ❗️❗️❗️1️⃣-⑥：当“未登录”（未通过验证）时，渲染以下“样式组件”；
      return(
        <LoginWrapper>
          <LoginBox>
            <Input type="text" placeholder="账号" ref={(input) => {this.text = input}} />
            <Input type="password" placeholder="密码" ref={(input) => {this.password = input}}  />
            <Button type="submit" onClick={() => this.props.handleLogin(this.text, this.password)}>登陆</Button>
          </LoginBox>
        </LoginWrapper>
      ) 
    }else { // ❗️1️⃣-⑦：否则执行以下逻辑（重定向到“首页”）；
      // ❓1️⃣-⑧：怎样“重定向”到首页呢？
      
      // 1️⃣-⑩：我们用“Redirect 组件”来“重定向”至“首页”；
      return <Redirect to="/" />
    }
  }
}

// 1️⃣-②：接下来，我们先定义“连接”的规则；
const mapStateToProps = (state) => ({ /*
                                      1️⃣-③：把 store 里的“数据 state”作为“参数”
                                      传递给 mapStateToProps；
                                       */
  
  login: state.getIn(["login", "login"]) /*
                                         ❗️1️⃣-④：规则的具体做法为——将 store 里
                                         的 login 映射到“Login 组件”里的 props
                                         的 login 中去；
                                          */
})


const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin(accountElem, passwordElem) { 
      const action = actionCreators.loginAction(accountElem.value, passwordElem.value);
      dispatch(action);
    }
  }
}


/*
❗️1️⃣-①：给 connect 传递另一个重要“参数”mapStateToProps。
根据上边一系列的操作，Login 组件已经有“能力”取得 store 中的“数据”，
有“能力”后，Login 组件就可以去“连接”store，并从 store 中去取“数据”了。

但“连接”是需要“规则”的，而具体的“规则”就在这个 mapStateToProps 里面（❗️直译为：把 store 里
的“数据 state”映射到“Login 组件”的 props 里）！
注释掉下面这行代码~
export default connect(null, mapDispatchToProps)(Login); 
 */
export default connect(mapStateToProps, mapDispatchToProps)(Login);