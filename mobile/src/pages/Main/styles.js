import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

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
export const Form = styled.View`
  flex-direction: row;
  margin-top: 16px;
  padding: 0 20px;
`;
export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#000',
})`
  flex: 1;
  padding: 12px 15px;
  border-radius: 4px;
  font-size: 16px;
  color: #333;
  background: #fff;
  border: 2px solid ${props => (props.onError ? '#FF7272' : '#FFF')};
`;

export const Submit = styled.TouchableOpacity``;

export const Gradient = styled(LinearGradient).attrs({
  colors: ['#E1D24A', '#C69223'],
})`
  margin-left: 10px;
  justify-content: center;
  border-radius: 28px;
  padding: 14px 14px;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: {paddingHorizontal: 20},
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;
