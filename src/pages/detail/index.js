import React, {PureComponent} from "react"; // ❗️❗️❗️

import {
  DetailWrapper,
  Header,
  Content
} from "./style.js";

import {connect} from "react-redux";

import {actionCreators} from "./store"; 

class Detail extends PureComponent { // ❗️❗️❗️
  
  render() {
    return(
      <DetailWrapper>
        <Header>{this.props.title}</Header> 
     
        <Content 
          dangerouslySetInnerHTML={{__html: this.props.content}}
        />

      </DetailWrapper>
    )
  }
  

  componentDidMount() {  
    this.props.getDetail(this.props.match.params.id); 
  }
}

const mapStateToProps = (state) => { 
  
  return {  
    title: state.getIn(["detail", "title"]),  
    content: state.getIn(["detail", "content"]) 
  }

}


const mapDispatchToProps = (dispatch) => {  
  return {
    getDetail(id) {  
      const action = actionCreators.getDetailData(id); 
      
      dispatch(action)
    
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);  