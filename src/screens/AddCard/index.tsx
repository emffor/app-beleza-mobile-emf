import React from 'react';
import { ButtonBack } from '../../components/Form/ButtonBack';
import { Input } from '../../components/Form/Input';
import { InputForm } from '../../components/Form/InputForm';
import CardDataSvg from '../../assets/carddata.svg';

import {
  Container,
  Form,
  Content,
  FieldInputs,
  FormInput,
  FieldIcon,
  Footer,
  FieldButtonAdd
} from './styles';
import { Button } from '../../components/Form/Button';
import { useNavigation } from '@react-navigation/native';

export function AddCard(){
  const navigation = useNavigation();

  function handleAddAddress(){
    navigation.navigate('AddAddress');
  }

  function handleGoBack(){
    navigation.goBack();
  }

  return (
    <Container>
      <Form>
        <Content>
            <ButtonBack 
                onPress={handleGoBack}
                title="Adicionar Cartão"
            />
            <FieldInputs>
                  <Input 
                      placeholder="Número do cartão"
                  />

                  <FieldIcon>
                    <CardDataSvg 
                      width={32}
                      height={25}
                    />
                  </FieldIcon>

                 <FormInput>

                    <InputForm 
                          placeholder="Validade"
                      />

                      <InputForm 
                          placeholder="CVV"
                      />    

                </FormInput>   

                <Input 
                      placeholder="Nome do titular"
                  />

                  <Input 
                      placeholder="CPF"
                  />
            </FieldInputs>

            
        </Content>



        <Footer>        
              <FieldButtonAdd>
                <Button 
                  title="Adicionar Cartão"
                  onPress={handleAddAddress}
                />
              </FieldButtonAdd>
          </Footer>
      </Form>
    </Container>
  );
}