import styled from 'styled-components';

import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

const LoginComponent = styled.div`
  display: flex;
  justify-content: center;
  height: 95vh;
  width: 100vw;
  align-items: center;
`;

const CardComponent = styled(Card)`
  width: 350px;
  height: 250px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ButtonComponent = styled(Button)`
  margin-top: 20px !important;
  height: 40px;
  width: 200px;
`;

const SwitchComponent = styled.div`
  display: flex;
  align-items: left;
  width: 200px;
`;

const RememberMe = styled.span`
  margin: 15px 5px;
  font-family: sans-serif;
  color: #ff0266;
`;

export {
  LoginComponent,
  CardComponent,
  ButtonComponent,
  SwitchComponent,
  RememberMe
};
