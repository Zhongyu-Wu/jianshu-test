import React, {PureComponent} from "react";

import {Link} from "react-router-dom";  

import {
  HeaderWrapper,
  Logo,
  
  Navbar,
  ItemList,
  LinkList,
  
  SearchArea,
  SearchInput,
  SearchPanel,
  PanelTitle,
  PanelChange,
  PanelLabels,
  LabelLink,
  
  Extra,
  ExtraLink
  
} from "./style";

import { connect } from "react-redux";

import {actionCreators} from "./store";

import {actionCreators as loginActionCreators} from "../../pages/login/store";

class Header extends PureComponent {
  
  getPanels() {
    const newList = this.props.list.toJS();
    const pageLabels = [];  
    
    if(newList.length) {  
      for(let i=(this.props.page - 1)*10; i<this.props.page*10; i++) { 
        pageLabels.push(  
          <Link to="/"  key={newList[i]}>  
            <LabelLink>  
              {newList[i]} 
            </LabelLink>
          </Link>
        )
      }
      return pageLabels; 
    }
  } 
  
  render() {
    return (
      <HeaderWrapper>

        <Link to="/">  
          <Logo>
            <img src="https://qdywxs.github.io/jianshu-images/logo.png" alt="logo" />
          </Logo>
        </Link>

        <Navbar className="clearfix">
          <ItemList className="active">
            <Link to="/">  
              <LinkList href="/">
                首页
              </LinkList>
            </Link>
          </ItemList>

          <ItemList>
            <Link to="/">  
              <LinkList>
                下载APP
              </LinkList>  
            </Link>         
          </ItemList>
        </Navbar>
      
        <SearchArea>

          <SearchInput
            onFocus={() => this.props.handleInputFocus(this.props.list)}
          />
      
          <span className="iconfont icon-search">&#xe63e;</span>
      
          <SearchPanel>
            <PanelTitle>
              热门搜索
      
              <PanelChange
                onMouseDown={this.props.handleMouseDown}
                onMouseUp={this.props.handleMouseUp}

                onClick={() => this.props.handleChangePage(this.props.page, this.props.totalPage)}
              >  
                  
                <span className={this.props.refresh ? "iconfont refresh" : "iconfont"}>&#xe65f;</span>
                换一批
              </PanelChange>
            </PanelTitle>
      
            <PanelLabels className="clearfix">
              {this.getPanels()}
            </PanelLabels>
          </SearchPanel>
        </SearchArea>
      
      
        <Extra>
          <span className="iconfont icon-textsize" >&#xe739;</span>
          {this.props.login ? <ExtraLink className="login" onClick={this.props.logout}>退出</ExtraLink> : 
            <Link to="/login">
              <ExtraLink className="login">
                登录
              </ExtraLink>
            </Link>
          }

          <Link to="/">  
            <ExtraLink className="register">
              注册
            </ExtraLink> 
          </Link>

					{/*
           ❗️❗️❗️2️⃣-⑰：将“写文章”的 Link 标签的跳转“路径”改为 /write；
           先注释掉下面的写法~
          <Link to="/">  
            */}
					<Link to="/write">
            
            <ExtraLink className="writing">
              <span className="iconfont icon-pen">&#xe600;</span>
              写文章
            </ExtraLink>  
          </Link>  

        </Extra>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => { 
  return { 
    refresh: state.getIn(["header", "refresh"]),
    list: state.getIn(["header", "list"]),
    
    page: state.getIn(["header", "page"]),
    totalPage: state.getIn(["header", "totalPage"]),

    login: state.getIn(["login", "login"])
    
  }
}

const mapDispatchToProps = (dispatch) => {  
  return {
    handleMouseDown() { 
      const action = actionCreators.changeClassNameAction(); 
      dispatch(action)
    
    },

    handleMouseUp() {
      const action = actionCreators.resumeClassNameAction();
      dispatch(action)
    },
    
    
    handleInputFocus(list) {  
      if(list.size === 0) { 
        const action = actionCreators.initLabelAction();
        dispatch(action)
      }
    },
    
    handleChangePage(page, totalPage) {
      if(page < totalPage) {
        dispatch(actionCreators.changePageAction(page + 1))
      }else {
        dispatch(actionCreators.changePageAction(1))
      }
    },
    

    logout() {
      const action = loginActionCreators.logout();
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header); 