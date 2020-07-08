import styled from "styled-components";

export const Section = styled.section`
  margin-top: 30px;
`;

export const Aside = styled.aside`
  float: right;
  width: 280px;
`;

export const Main = styled.main`
  margin-right: 318px;

  .banner-img {
    width: 632px;
    height: 270px;
  }
`;

export const ToTop = styled.div`
  position: fixed;
  right: 40px;
  bottom: 50px;
  width: 60px;
  height: 60px;
  line-height: 60px;

  text-align: center;
  border: 1px solid #ccc;
  background-color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #f8f8f8;
  }

  .up {
    font-size: 20px;
  }

  .tooltip {
    position: absolute;
    right: 70px;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    width: 63px;
    text-align: center;
    line-height: 1.8;
    color: #fff;
    background-color: #000;
    border-radius: 4px;
    display: none
  }

  &:hover .tooltip {
    display: block;
  }

  .tooltip:after {  /*❗️用于制作向右的三角！*/
    content: "";
    position: absolute;
    right: -12px;
    top: 5px;

    dispaly: block;

    width: 0;
    height: 0;

    border-style: solid;
    border-width: 6px 0 6px 6px;
    border-color: transparent transparent transparent #000;
  }
`;

export const LabelGroup = styled.div`
  margin-top: 20px;
`;

export const Labels = styled.span`
  display: inline-block;
  padding-right: 10px;
  margin: 10px 20px 10px 0;
  color: #333;

  vertical-align: middle;

  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;

  overflow: hidden;

  cursor: pointer;

  & > img {
    width: 32px;
    height: 32px;
    margin-right: 10px;
    vertical-align: middle;
  }
`;

export const MoreLabels = styled.span`
  color: #787878;
  vertical-align: middle;
  cursor: pointer;
`;

export const Item = styled.div`
  position: relative;
  border-top: 1px solid #ccc;
  margin-top: 20px;
  padding: 20px 0;
`;

export const Cover = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  margin-top: -58px;
  width: 140px;
  height: 117px;
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    vertical-align: top;
  }
`;

export const Details = styled.div`
  margin-right: 160px;
`;

export const Title = styled.h2`
  margin-top: 10px;
  color: #333;
  font-size: 20px;
`;

export const Foot = styled.div`
  margin-top: 10px;
  font-size: 12px;

  & .username {
    color: #999;
  }

  & .username:hover {
    color: #333;
  }

  & > span {
    color: #999;
  }

  .iconfont {
    margin-left: 10px;
  }
`;

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  margin: 30px 0;
  line-height: 40px;
  text-align: center;
  color: #fff;
  background-color: #a5a5a5;
  border-radius: 20px;
  cursor: pointer;
`;

export const PanelImage = styled.div`
  & img {
    width: 280px;
    height: 45px;
  }
`;

export const DownloadArea = styled.div`
  position: relative;
  padding: 10px 22px;
  margin-top: 10px;
  border: 1px solid #ececec;
  border-radius: 4px;
  
  & > img {
    float: left;
    width: 56px;
    height: 56px;
    
  }

  & > h3 {
    margin-left: 66px;
    font-weight: normal;
    color: #333;
  }

  & > p {
    margin-left: 66px;
    color: #999;
  }

  &:hover > .tooltip {
    display: block;
  }
`;

export const DownloadTip = styled.div`
  position: absolute;
  top: -198px;
  left: calc(50% - 91px);
  width: 182px;
  height: 182px;
  padding: 10px;
  border: 1px solid #ececec;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 2px 5px 2px rgba(0,0,0,0.3);
  
  display: none;

  &:after {
    content: "";
    position: absolute;
    bottom: -9px;
    left: 50%;
    margin-left: -8px;
    transform: rotateZ(45deg);
    dispaly: block;
    width: 16px;
    height: 16px;
    background: #fff;
    border-right: 1px solid #ececec;
    border-bottom: 1px solid #ececec;
  }

  & > img {
    width: 100%;
    height: 100%;
  }
`;