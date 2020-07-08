import React, {Component} from "react";

import {Link} from "react-router-dom"; 

import {
  PanelImage
} from "../style";

/*
❗️❗️❗️2️⃣-②：从 react-redux 中引入 connect 方法（它也是 React-redux 的核心 API 之一），
connect 的作用很明确——就是“连接”的意思！
 */
import { connect } from "react-redux";


class Panels extends Component {
  render() {
    
    return(
      <div>
       
        {/*
         ❗️❗️❗️2️⃣-⑨：“映射”上了过后，我们就可以通过调用 this.props.panelsList 来
         “调用”store 中的 panelsList 了！
         删除下边的代码，重新用 this.props 来改写~
        <PanelImage>
          <Link to="#">
            <img src="https://qdywxs.github.io/jianshu-images/panel01.png" alt="" />
          </Link>
        </PanelImage>
       

        <PanelImage>
          <Link to="#">
            <img src="https://qdywxs.github.io/jianshu-images/panel02.png" alt="" />
          </Link>
        </PanelImage>
        
        
        <PanelImage>
          <Link to="#">
            <img src="https://qdywxs.github.io/jianshu-images/panel03.png" alt="" />
          </Link>  
        </PanelImage>

        
        <PanelImage>
          <Link to="#">
            <img src="https://qdywxs.github.io/jianshu-images/panel04.png" alt="" />
          </Link>
        </PanelImage>
       
        
        <PanelImage>
          <Link to="#">
            <img src="https://qdywxs.github.io/jianshu-images/panel05.png" alt="" />
          </Link>
        </PanelImage>
          */}
        {
          this.props.panelsList.map((item) => {
            return (
              <PanelImage key={item.get("id")}>
                <Link to="/">
                  <img src={item.get("imgUrl")} alt="" />
                </Link>
              </PanelImage>  
            )
          })
        }
      </div>
    )
  }
}


// 2️⃣-⑥：接下来，我们先定义“连接”的“规则”；
const mapStateToProps = (state) => { /*
																		 2️⃣-⑦：把 store 里的“数据 state”作为“参数”
                                     传递给 mapStateToProps；
                                      */
  
  return { // ❗️这个“规则”会返回一个“对象”出去！
    panelsList: state.getIn(["home", "panelsList"]) /*
    											 ❗️❗️❗️2️⃣-⑧：“规则”的具体做法为——将 store 里的  
                           panelsList 映射到“Panels 组件”里的 props 的 panelsList 中去；
                                                     */
  
  }

}



/*
❗️❗️❗️2️⃣-③：之前我们直接导出的是 Panels，可用了 React-redux 后，就不能这样写了！
export default Panels;
 */

/*
2️⃣-④：取而代之，我们是导出 connect 方法（
❗️注意看我们给 connect 方法传递了哪些参数！）；
 */
export default connect(mapStateToProps, null)(Panels); /*
																				2️⃣-⑤：我们一共要给 connect 传递 3 个参数！
                                        Panels 表示：connect 会让“Panels 组件”和 store
                                        进行“连接”；
                                        
                                        mapStateToProps 表示：“Panels 组件”和 store 
                                        进行“连接”是需要“规则”的，而具体的“规则”就在这个
                                        mapStateToProps 里边（❗️直译为：把 store 里边的
                                        “数据 state”映射到“Panels 组件”的 props 里）；
                                        
                                        null 表示：这里还会接收一个名叫 
                                        mapDispatchToProps 的参数，等下“改变数据”时讲解，
                                        这里先用 null 占位。
                                                        */