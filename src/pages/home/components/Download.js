import React, {Component} from "react";

import {Link} from "react-router-dom"; // ❗️引入 Link 进行“单页”应用页面跳转！

// ❗️2️⃣从 home 目录下的 style.js 中引入各个定义好的“样式组件”；
import {
  DownloadArea,
  DownloadTip
} from "../style"

class Download extends Component {
  render() {
    
    // ❗️❗️❗️1️⃣：将“标签”拆分成一个个的“样式组件”；
    return(
      <Link to="/">
        <DownloadArea className="clearfix"> {/* ❗️请记得清楚浮动! */}
          <img src="https://qdywxs.github.io/jianshu-images/qr-code.png" alt="" />
          <h3>下载简书手机 APP > </h3>
          <p>随时随地发现和创作内容</p>
          
          <DownloadTip className="tooltip">
            <img src="https://qdywxs.github.io/jianshu-images/qr-code.png" alt="" />
          </DownloadTip>
        </DownloadArea>
      </Link>
    )
  }
}

export default Download;