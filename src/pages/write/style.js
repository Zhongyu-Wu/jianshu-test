import styled from "styled-components";

export const WriteWrapper = styled.div`
  width: 620px;
  margin: 0 auto;
  padding-bottom: 100px;

`;

export const Title = styled.input`
  display: inline-block;
  width: 100%;
  padding: 10px 20px;
  
  outline: none;

  font-size: 18px;
`;

export const Editor = styled.div`
  textarea {
    position: absolute;
    width: 620px;
    height: 100%;
    padding: 20px;

    background: #eee;

    border: none;
    resize: none;
    outline: none;
  }
`;