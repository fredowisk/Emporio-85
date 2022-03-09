import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Container,
  Description,
  Name,
  Quantity,
  Stats,
  Cost,
  Price,
  Options,
  PlusButton,
  MinusButton,
} from './styles';

const Product = ({data: {name, quantity, cost, price}}) => {
  return (
    <Container>
      <Description>
        <Name>{name}</Name>
        <Quantity>Quantidade - {quantity}</Quantity>
      </Description>
      <Stats>
        <Cost>Custo - {'R$' + cost}</Cost>
        <Price>Preço - {'R$' + price}</Price>
      </Stats>
      <Options>
        <PlusButton>
          <Icon name="plus" size={12} color="#FFF" />
        </PlusButton>
        <MinusButton>
          <Icon name="minus" size={12} color="#FFF" />
        </MinusButton>
      </Options>
    </Container>
  );
};

export default Product;
