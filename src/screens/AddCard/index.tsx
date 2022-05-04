import React from 'react';
import { ButtonBack } from '../../components/Form/ButtonBack';

import {
  Container,
  Content,
  FieldInputs,
  FormInput,
} from './styles';

export function AddCard(){
  return (
    <Container>
        <Content>
            <ButtonBack 
                onPress={() => {}}
                title="Adicionar Cartão"
            />

            <FieldInputs>

                 <FormInput>
                     
                </FormInput>   
            </FieldInputs>

        </Content>


    </Container>
  );
}