import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding-top: 38px;
  background: #242329;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  margin-left: 28%;
`;

export const FormContainer = styled.View`
  margin-top: 46px;
  padding: 0 20px;
`;

export const Button = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: #ff9000;
  border-radius: 10px;
  margin-top: 60%;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
`;
