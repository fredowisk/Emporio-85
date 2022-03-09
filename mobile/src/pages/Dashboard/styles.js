import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  flex: 1;
  padding-top: 34px;
  background: #242329;
  align-items: center;
`;

export const LogoContainer = styled(LinearGradient).attrs({
  colors: ['#E1D24A', '#C69223'],
})`
  position: relative;
  margin-top: 50px;
  width: 60%;
  height: 34%;
  border-radius: 120px;
`;

export const LogoBeers = styled.View`
  position: absolute;
  align-self: center;
  flex-direction: row;
  top: 10%;
`;

export const LogoTitle = styled.Text`
  position: absolute;
  align-self: center;
  bottom: 42%;
  width: 99%;
  padding: 6px 0;
  text-align: center;
  background-color: #fff;
  color: #000;
  font-size: 28px;
  font-weight: 800;
  text-shadow-color: rgba(0, 0, 0, 0.95);
  text-shadow-offset: -1px 1px;
  text-shadow-radius: 8px;
`;

export const CircleLeft = styled.View`
  position: absolute
  width: 54px;
  height: 52px;
  z-index: 3;
  border-radius: 50px;
  margin-left: -40px;
  bottom: 41.5%;
  background-color: #242329;
`;

export const CircleRight = styled.View`
  position: absolute
  width: 54px;
  height: 52px;
  z-index: 3;
  border-radius: 50px;
  margin-right: -40px;
  right: 0;
  bottom: 41.5%;
  background-color: #242329;
`;

export const LogoNumber = styled.Text`
  position: absolute;
  font-weight: bold;
  font-size: 76px;
  color: #000;
  bottom: 6%;
  align-self: center;
  text-shadow-color: rgba(0, 0, 0, 0.95);
  text-shadow-offset: -2px 1px;
  text-shadow-radius: 8px;
`;

export const OptionsContainer = styled.View`
  margin-top: 20%;
`;

export const OptionsTitle = styled.Text`
  font-weight: bold;
  font-size: 32px;
  color: #fff;
`;

export const Grid = styled.View`
  margin-top: 16%;
  margin-left: 2%;
  width: 80%;
  flex-direction: row;
  flex-wrap: wrap;
  flex-basis: 33%;
  align-content: flex-start;
`;

export const OptionButton = styled.TouchableOpacity`
  background-color: #242329;
  padding: 20px;
  margin: 4px;
`;
