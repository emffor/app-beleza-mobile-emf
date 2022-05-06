import React from 'react';
import { ButtonBack } from '../../components/Form/ButtonBack';
import { Input } from '../../components/Form/Input';
import { InputForm } from '../../components/Form/InputForm';
import CardDataSvg from '../../assets/carddata.svg';

import {
  Container,
  Content,
  FieldInputs,
  FormInput,
  FieldIcon,
  Footer,
  FieldButtonAdd
} from './styles';
import { Button } from '../../components/Form/Button';

export function AddCard(){
  return (
    <Container>
        <Content>
            <ButtonBack 
                onPress={() => {}}
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
                />
              </FieldButtonAdd>
          </Footer>
    </Container>
  );
}