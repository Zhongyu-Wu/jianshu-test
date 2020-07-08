import React, {Component} from "react";

import {
  LabelGroup,
  Labels,
  MoreLabels
} from "../style";

/*
❗️❗️❗️6️⃣-②：从 react-redux 中引入 connect 方法（它也是 React-redux 的核心 API 之一），
connect 的作用很明确——就是“连接”的意思！
 */
import { connect } from "react-redux";


class Label extends Component {
  render() {
    
    return(
      <LabelGroup className="clearfix">
        {/*
         ❗️❗️❗️6️⃣-⑨：“映射”上了过后，我们就可以通过调用 this.props.labelList 来
         “调用”store 中的 labelList 了！
         删除下边的代码，重新 this.props 来改写~
        <Labels>
          <img src="https://qdywxs.github.io/jianshu-images/label01.jpg" alt="" />
          简书电影
        </Labels>
        <Labels>
          <img src="https://qdywxs.github.io/jianshu-images/label02.jpg" alt="" />
          故事
        </Labels>
        <Labels>
          <img src="https://qdywxs.github.io/jianshu-images/label03.jpg" alt="" />
          手绘
        </Labels>
        <Labels>
          <img src="https://qdywxs.github.io/jianshu-images/label04.jpg" alt="" />
          历史
        </Labels>
        <Labels>
          <img src="https://qdywxs.github.io/jianshu-images/label05.jpg" alt="" />
          人文社科
        </Labels>
        <Labels>
          <img src="https://qdywxs.github.io/jianshu-images/label06.jpg" alt="" />
          摄影
        </Labels>
        <Labels>
          <img src="https://qdywxs.github.io/jianshu-images/label07.jpg" alt="" />
          自然科普
        </Labels>
          */}
  			{
          this.props.labelList.map((item) => {
            return (
              <Labels key={item.get("id")}> {/* ❗️由于是“循环”，所以要给每一项一个 key 值！ */}
                <img src={item.get("imgUrl")} alt="" /> {/* ❗️注意 get 的使用！ */}
                {item.get("title")}
              </Labels>
            )
          })
				}
  
        <MoreLabels>
          更多热门专题
        </MoreLabels>
      </LabelGroup>
    )
  }
}


// 6️⃣-⑥：接下来，我们先定义“连接”的“规则”；
const mapStateToProps = (state) => { /*
																		 6️⃣-⑦：把 store 里的“数据 state”作为“参数”
                                     传递给 mapStateToProps；
                                      */
  
  return { // ❗️这个“规则”会返回一个“对象”出去！
    labelList: state.getIn(["home", "labelList"]) /*
    												❗️❗️❗️6️⃣-⑧：“规则”的具体做法为——将 store 里的  
                            labelList 映射到“Label 组件”里的 props 的 labelList 中去；
                                                   */
  
  }

}


/*
❗️❗️❗️6️⃣-③：之前我们直接导出的是 Header，可用了 React-redux 后，就不能这样写了！
export default Label;
 */

/*
6️⃣-④：取而代之，我们是导出 connect 方法（
❗️注意看我们给 connect 方法传递了哪些参数！）；
 */
export default connect(mapStateToProps, null)(Label); /*
																				6️⃣-⑤：我们一共要给 connect 传递 3 个参数！
                                        Label 表示：connect 会让“Label 组件”和 store
                                        进行“连接”（由“6️⃣-①”可知，Label 已经拥有“能力”
                                        连接 store）；
                                        
                                        mapStateToProps 表示：“Label 组件”和 store 
                                        进行“连接”是需要“规则”的，而具体的“规则”就在这个
                                        mapStateToProps 里边（❗️直译为：把 store 里边的
                                        “数据 state”映射到“Label 组件”的 props 里）；
                                        
                                        null 表示：这里还会接收一个名叫 
                                        mapDispatchToProps 的参数，等下“改变数据”时讲解，
                                        这里先用 null 占位。
                                                      */