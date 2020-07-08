import React, {Component} from "react";

import Content from "./components/Content";
import Label from "./components/Label";
import Panels from "./components/Panels";
import Download from "./components/Download";

import {
  Section,
  Aside,
  Main,
  ToTop
  
} from "./style.js";

import { connect } from "react-redux";

import {actionCreators} from "./store"; 


class Home extends Component {
  
  handleScrollTop() {
    window.scrollTo(0, 0);
  }
  
  render() {
    return( 
      <div>
        <Section className="layout clearfix"> 
          <Aside>
            <Panels />
            <Download />
          </Aside>
        
          <Main>
            <img className="banner-img" src="https://qdywxs.github.io/jianshu-images/carousel01.jpg" alt="" />
            
            <Label />
            <Content />
          </Main>
        </Section>
        
        {this.props.showToTop ?
          <ToTop onClick={this.handleScrollTop}>  
            <span className="up">^</span>
            <span className="tooltip">回到顶部</span>
          </ToTop>
          :null
        }
      </div>
    )
  }

  componentDidMount() { 
    this.props.changeHomeData();
    
    // ❗️4️⃣-①：当组件“挂载”好后，我们在这里绑定了一些事件；
    this.bindEvent();
  }

  // ❗️4️⃣-③：所以，我们在生命周期函数 componentWillUnmount 中“解绑”scroll 事件！
	componentWillUnmount() {
    window.removeEventListener("scroll", this.props.changeShowToTop)
  }

  bindEvent() {
    
    /*
    ❗️❗️❗️4️⃣-②：且，这些“事件”是绑定在“全局”的 window 对象上的！故，我们需要做的是——
    当“组件”被从页面上移除的时候，我们一定得把 scroll 事件从 window 上“解绑”。
    否则，这个“组件”的事件就会影响其他的“组件”！
     */
    window.addEventListener("scroll", this.props.changeShowToTop) 
  }

}

const mapStateToProps = (state) => ({
  showToTop: state.getIn(["home", "showToTop"])
})


const mapDispatchToProps = (dispatch) => ({ 
  changeHomeData() { 
    const action = actionCreators.getHomeInfo();
    dispatch(action)
  },
  
  changeShowToTop() {
    if(document.documentElement.scrollTop > 120) {
      const action = actionCreators.changeShowToTopAction(true); 
      dispatch(action)
    }else {
      const action = actionCreators.changeShowToTopAction(false);
      dispatch(action)
    }
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(Home)