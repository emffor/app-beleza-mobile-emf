import React from 'react';
import { ButtonBack } from '../../components/Form/ButtonBack';
import { Input } from '../../components/Form/Input';
import { InputForm } from '../../components/Form/InputForm';

import {
  Container,
  Content,
  FieldInputs,
  FormInput,
  FormCep,
  Button,
  ButtonText
} from './styles';

export function AddAddress(){
  return (
    <Container>
        <Content>
            <ButtonBack 
                onPress={() => {}}
                title="Adicionar Cartão"
            />
            <FieldInputs>
                      <FormCep>
                          <InputForm 
                              placeholder="CEP"
                          />

                          <Button>
                              <ButtonText>Buscar CEP</ButtonText>
                          </Button>
                      </FormCep>



                 <FormInput>

                    <InputForm 
                          placeholder="Número"
                      />

                      <InputForm 
                          placeholder="Complemento"
                      />    

                </FormInput>   

                <Input 
                      placeholder="Bairro"
                  />

                  <Input 
                      placeholder="Estado"
                  />
            </FieldInputs>

        </Content>


    </Container>
  );
}