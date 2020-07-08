import {createGlobalStyle} from "styled-components"; /*
																										 🔟-③：引入 createGlobalStyle
																										 方法；
                                                      */

// 🔟-④：将 iconfont 中的代码拷贝到这个“全局”样式中！
export const GlobalIconStyle = createGlobalStyle`
  @font-face {
    font-family: "iconfont";

    /*❗️增加相对路径 ./ */
    src: url('./iconfont.eot?t=1566358182566'); /* IE9 */
    src: url('./iconfont.eot?t=1566358182566#iefix') format('embedded-opentype'), /* IE6-IE8 */

    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),

    /*❗️增加相对路径 ./ */
    url('./iconfont.woff?t=1566358182566') format('woff'),
    url('./iconfont.ttf?t=1566358182566') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1566358182566#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;