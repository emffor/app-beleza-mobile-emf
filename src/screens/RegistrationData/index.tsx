import React from 'react';
import { Button } from '../../components/Form/Button';

import { ButtonBack } from '../../components/Form/ButtonBack';
import { Input } from '../../components/Form/input';

import {
  Container,
  Form,
  Fields,
  Footer,
  FieldCheck,
  Checkbox,
  Title
} from './styles';

export function RegistrationData(){
  return (
    <Container>
         <Form>
                <ButtonBack 
                    title="Fazer cadastro"
                /> 

           <Fields>
                <Input 
                    placeholder="Nome Completo"

                />
                
                <Input 
                    placeholder="Email"
                />

                <Input 
                    placeholder="Senha"
                    secureTextEntry={true}
                />
                

                <FieldCheck>
                  <Checkbox>

                  </Checkbox>
                  
                  <Title>
                    Aceito os termos e condições
                  </Title>
                </FieldCheck>
            </Fields>
        </Form>    

        <Footer>
          <Button 
                title="Cadastrar"
                onPress={() => {}}
            />
        </Footer>     
    </Container>
  );
}