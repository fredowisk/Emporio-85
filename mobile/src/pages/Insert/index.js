import React, {useCallback, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Alert, KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Form} from '@unform/mobile';

import Input from '../../components/Input';

import * as Yup from 'yup';

import {
  Container,
  Header,
  Title,
  FormContainer,
  Button,
  ButtonText,
} from './styles';

const Insert = () => {
  const formRef = useRef(null);
  const navigation = useNavigation();

  const quantityInputRef = useRef(null);
  const costInputRef = useRef(null);
  const priceInputRef = useRef(null);

  const handleSubmitForm = useCallback(async data => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        quantity: Yup.number()
          .integer('Insira um valor sem virgula')
          .required('Quantidade obrigatória'),
        cost: Yup.number().required('Custo obrigatório'),
        price: Yup.number().required('Preço obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      Alert.alert(
        'Cadastro realizado com sucesso!',
        'Você já pode vender este produto!',
      );
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        // const errors = getValidationErrors(error);

        formRef.current?.setErrors(error);

        return;
      }
    }
  }, []);

  return (
    <Container>
      <Header>
        <Icon
          name="arrow-back"
          size={28}
          color="#FFF"
          onPress={() => navigation.goBack()}
        />
        <Title>Cadastro</Title>
      </Header>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView
          keyboardShouldPersistTaps="handler"
          contentContainerStyle={{flex: 1}}
        />
        <FormContainer>
          <Form ref={formRef} onSubmit={handleSubmitForm}>
            <Input
              autoCapitalize="words"
              name="name"
              icon="box"
              placeholder="Nome"
              returnKeyType="next"
              onSubmitEditing={() => {
                quantityInputRef.current?.focus();
              }}
            />
            <Input
              ref={quantityInputRef}
              name="quantity"
              icon="layers"
              placeholder="Quantidade"
              returnKeyType="next"
              onSubmitEditing={() => {
                costInputRef.current?.focus();
              }}
            />
            <Input
              ref={costInputRef}
              name="cost"
              icon="dollar-sign"
              placeholder="Custo"
              returnKeyType="next"
              onSubmitEditing={() => {
                priceInputRef.current?.focus();
              }}
            />
            <Input
              ref={priceInputRef}
              name="price"
              icon="dollar-sign"
              placeholder="Preço"
              returnKeyType="send"
              onSubmitEditing={() => formRef.current?.submitForm()}
            />
          </Form>
          <Button onPress={() => formRef.current?.submitForm()}>
            <ButtonText>Salvar</ButtonText>
          </Button>
        </FormContainer>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default Insert;
