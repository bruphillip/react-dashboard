import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`;

const spinnerStyle = styled.div`
  & {
    display: inline-block;
    width: 64px;
    height: 64px;
    margin-left: 10px;
    margin-top: 10px;
  }
  &:after {
    content: ' ';
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #004ba0;
    border-color: #004ba0 transparent #004ba0 transparent;
    animation: ${rotate} 1.2s linear infinite;
  }
`;

export default spinnerStyle;
