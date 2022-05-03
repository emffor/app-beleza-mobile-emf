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
  ButtonForgot,
  ButtonRegister,
  Title,
  TitleRegister,
  TitleRegisterButton,
} from './styles';

export function SignIn(){
  return (
    <Container>
         <Form>
                <ButtonBack 
                    title="Entrar"
                /> 

           <Fields>
                
                <Input 
                    placeholder="Email"
                />

                <Input 
                    placeholder="Senha"
                    secureTextEntry={true}
                />
                

                <FieldCheck>
                  <Button 
                    title="Entrar"
                    onPress={() => {}}
                  />

                  <ButtonForgot
                    onPress={() => {}}
                    >
                    <Title>Esqueceu a senha?</Title>
                  </ButtonForgot>
                  
                </FieldCheck>

                
            </Fields>
        </Form>    

        <Footer>
        <TitleRegister>Não possui conta?</TitleRegister>
          <ButtonRegister
            onPress={() => {}}
            >
            <TitleRegisterButton>Cadastre-se</TitleRegisterButton>
          </ButtonRegister>
        </Footer>     
    </Container>
  );
}