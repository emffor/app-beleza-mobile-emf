import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Button } from '../../components/Form/Button';

import { ButtonBack } from '../../components/Form/ButtonBack';
import { Input } from '../../components/Form/Input';
import auth from '@react-native-firebase/auth';

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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleCreateUserAccount(){
    auth()
     .createUserWithEmailAndPassword(email, password)
     .then(() => Alert.alert('Usuário criado com sucesso!'))
     .catch(error => {
 
       if(error.code === 'auth/email-already-in-use'){
        return Alert.alert('E-mail já cadastrado!');
       }
 
       if(error.code === 'auth/invalid-email'){
        return Alert.alert('E-mail inválido!');
       }
 
       if(error.code === 'auth/weak-password'){
        return Alert.alert('Senha muito fraca!');
       }
     })
   }

   console.log(name, email, password);
   


  return (
    <Container>
         <Form>
                <ButtonBack 
                    title="Fazer cadastro"
                /> 

           <Fields>
                <Input 
                    placeholder="Nome Completo"
                    onChangeText={setName}

                />
                
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
                onPress={handleCreateUserAccount}
            />
        </Footer>     
    </Container>
  );
}