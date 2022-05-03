import React, { useState } from 'react';
import { Button } from '../../components/Form/Button';

import { ButtonBack } from '../../components/Form/ButtonBack';
import { Input } from '../../components/Form/input';

import auth from '@react-native-firebase/auth';

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
import { Alert } from 'react-native';

export function SignIn(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

   function handleSignInWithEmailAndPassword(){
    auth()
    .signInWithEmailAndPassword(email, password)
    .then(({ user }) => console.log(user))
     .catch(error => {
       // console.log(error.code);
       if(error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password'){
        return Alert.alert('Usuário ou senha inválidos!');
       }
     })
    };

    function handleForgotPassword(){
      auth()
      .sendPasswordResetEmail(email)
      .then(() => Alert.alert('Enviamos um link para seu E-mail para você redefinir sua senha!'))
    }


  return (
    <Container>
         <Form>
              <ButtonBack 
                  title="Entrar"
              /> 

           <Fields>
                
                <Input 
                    placeholder="Email"
                    onChangeText={setEmail}
                />

                <Input 
                    placeholder="Senha"
                    secureTextEntry={true}
                    onChangeText={setPassword}
                />
                

                <FieldCheck>
                  <Button 
                    title="Entrar"
                    onPress={handleSignInWithEmailAndPassword}
                  />

                  <ButtonForgot
                    onPress={handleForgotPassword}
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