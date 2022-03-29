import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  > .output {
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    font-family: Consolas, monospace;
    box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.25),
    inset 0 5px 5px -5px rgba(0, 0, 0, 0.25);
    color: #f69d02;
    background: #f5f5f5;
  }
  > .pad {
    > button {
      font-size: 18px;
      float: left;
      width: 25%;
      height: 64px;
      background: #f5f5f5;
      border: 1px solid #e7e5e5;
      &.ok {
        height: 128px;
        float: right;
        background: #f69d02;
      }
      &.zero {
        width: 50%;
      }
    }
  }
`;

export {Wrapper};