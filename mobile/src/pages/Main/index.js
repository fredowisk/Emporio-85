import React, {useState, useEffect} from 'react';
import {Keyboard} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Product from '../../components/Product';
import getRealm from '../../services/realm';

import {
  Container,
  Header,
  Title,
  Form,
  Input,
  Submit,
  Gradient,
  List,
} from './styles';

export default function Main() {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    async function loadProducts() {
      const realm = await getRealm();

      // const data = realm.objects('Products').sorted('name', true);
      const data = [];

      setProducts(data);
    }

    loadProducts();
  }, []);

  async function saveProduct(product) {
    const realm = await getRealm();

    realm.write(() => {
      realm.create('Product', product);
    });
  }

  async function handleAddRepository() {
    try {
      await saveProduct();

      setInput('');
      setError(false);
      Keyboard.dismiss();
    } catch (err) {
      setError(true);
    }
  }

  return (
    <Container>
      <Header>
        <Icon
          name="arrow-back"
          size={28}
          color="#FFF"
          onPress={() => navigation.goBack()}
        />
        <Title>Estoque</Title>
      </Header>
      <Form>
        <Input
          value={input}
          onChangeText={setInput}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Procurar produto..."
          onError={error}
        />
        <Submit onPress={handleAddRepository}>
          <Gradient>
            <Icon name="search" size={22} color="#FFF" />
          </Gradient>
        </Submit>
      </Form>

      <List
        keyboardShouldPersistTaps="handled"
        data={products}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => <Product data={item} />}
      />
    </Container>
  );
}
