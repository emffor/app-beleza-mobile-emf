import React, { useState } from 'react';
import { Button } from '../../components/Form/Button';

import { ButtonBack } from '../../components/Form/ButtonBack';
import { Input } from '../../components/Form/Input';

import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

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
  FormFooter
} from './styles';
import { Alert } from 'react-native';
import { InputPassword } from '../../components/Form/InputPassword';



export function SignIn(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  function handleNavigationRegistration(){
    navigation.navigate('RegistrationData');
  }


  async function handleSignInAnonymous() {
    const { user } = await auth().signInAnonymously();
    console.log(user);
  }

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

  
    const handleGoBAck = () => {
      navigation.goBack();
    }


  return (
    <Container>
         <Form>
              <ButtonBack 
                  title="Entrar"
                  onPress={handleGoBAck}
              /> 

           <Fields>        
                <Input 
                    placeholder="Email"
                    onChangeText={setEmail}
                />

                <InputPassword 
                    placeholder="Senha"
                    onChangeText={setPassword}
                />


                <FieldCheck>
                  <Button 
                    title="Entrar"
                    onPress={handleSignInAnonymous}
                  />

                  <ButtonForgot
                    onPress={handleForgotPassword}
                    >
                    <Title>Esqueceu a senha?</Title>
                  </ButtonForgot>            
                </FieldCheck>          
            </Fields>
        </Form>

      <FormFooter>   
        <Footer>
        <TitleRegister>Não possui conta?</TitleRegister>
          <ButtonRegister
            onPress={handleNavigationRegistration}
            >
            <TitleRegisterButton>Cadastre-se</TitleRegisterButton>
          </ButtonRegister>
        </Footer>     
      </FormFooter> 
    </Container>
  );
}