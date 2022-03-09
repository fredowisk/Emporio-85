import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  margin-bottom: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Description = styled.View``;

export const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #c69223;
`;

export const Quantity = styled.Text`
  color: #666;
  font-weight: 500;
  margin-top: 4px;
  line-height: 20px;
`;

export const Stats = styled.View`
  border-color: #000;
`;

export const Cost = styled.Text`
  color: #666;
  font-weight: 700;
`;

export const Price = styled.Text`
  color: #666;
  margin-top: 6px;
  line-height: 20px;
  font-weight: 700;
  line-height: 20px;
`;

export const Options = styled.View`
  width: 10%;
  align-items: center;
`;

export const PlusButton = styled.TouchableOpacity`
  margin-top: -10px;
  padding: 5px 6px;
  border-radius: 12px;
  background: #000000;
  opacity: 0.9;
`;

export const MinusButton = styled.TouchableOpacity`
  margin-top: 14px;
  padding: 5px 6px;
  border-radius: 12px;
  background: #000000;
  opacity: 0.9;
  margin-bottom: -10px;
`;
