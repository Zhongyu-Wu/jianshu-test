import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }


  /* ❗️5️⃣以下为我们“简书”项目自己的一些 common 样式！ */
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  body {
    font: 13px/1.8 -apple-system, 'SF UI Text',Arial,'PingFang SC','Hiragino Sans GB','Microsoft YaHei','WenQuanYi Micro Hei',sans-serif;
    /* 哪里的字最多，我们就把这个字体设为通用样式。 */

    color: #444;
  }

  .clearfix:after {
    content: "";
    display: block;
    clear: both;
  }


  .layout {
    width: 950px;
    margin-left: auto;
    margin-right: auto;
  }
  /*
  这几行代码是为了水平”居中“，但在通用样式里边，我们一般不要去设 margin-top 的值，
  因为后边如果特定样式需要设置这个值，我们再单独拿出来设置就可以了。
   */

`;