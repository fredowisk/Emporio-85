import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  Container,
  LogoContainer,
  LogoBeers,
  LogoTitle,
  CircleLeft,
  CircleRight,
  LogoNumber,
  OptionsContainer,
  OptionsTitle,
  Grid,
  OptionButton,
} from './styles';

import {useNavigation} from '@react-navigation/native';

const Dashboard = () => {
  const navigation = useNavigation();

  async function handleNavigate(page) {
    navigation.navigate(page);
  }

  return (
    <Container>
      <LogoContainer>
        <LogoBeers>
          <Icon
            name="beer"
            size={54}
            color="#FFF"
            style={{transform: [{rotateY: '180deg'}]}}
          />
          <Icon name="beer" size={54} color="#FFF" />
        </LogoBeers>
        <CircleLeft />
        <LogoTitle>EMPÓRIO</LogoTitle>
        <CircleRight />
        <LogoNumber>85</LogoNumber>
      </LogoContainer>
      <OptionsContainer>
        <OptionsTitle>Bem vindo, Alex!</OptionsTitle>
        <Grid>
          <OptionButton onPress={() => {}}>
            <Icon name="cart" size={70} color="#E1D24A" />
          </OptionButton>
          <OptionButton onPress={() => handleNavigate('Main')}>
            <Icon name="file-tray-full" size={70} color="#E1D24A" />
          </OptionButton>
          <OptionButton onPress={() => handleNavigate('Insert')}>
            <Icon name="duplicate" size={70} color="#E1D24A" />
          </OptionButton>
          <OptionButton onPress={() => {}}>
            <Icon name="analytics-outline" size={70} color="#E1D24A" />
          </OptionButton>
        </Grid>
      </OptionsContainer>
    </Container>
  );
};

export default Dashboard;
