import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Button } from '../../components/Form/Button';

import { ButtonBack } from '../../components/Form/ButtonBack';
import { Input } from '../../components/Form/Input';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Content,
  Form,
  Fields,
  Footer,
  FieldCheck,
  Title,
  SelectedTerms,
  IconSelected,
  FieldBack
} from './styles';

export function RegistrationData(){
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isActive, setIsActive] = useState(false);

  function isActiveCheck(){
    setIsActive(!isActive);
  }

  function handleGoBAck(){
    navigation.goBack();
  }

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
   
  return (
    <Container>
      <Content>
         <Form>
              <FieldBack>
                <ButtonBack 
                      title="Fazer cadastro"
                      onPress={handleGoBAck}
                  /> 
              </FieldBack>
           <Fields>
                <Input 
                    placeholder="Nome Completo"
                />
                
                <Input 
                    placeholder="Email"
                    onChangeText={setEmail}
                />

                <Input 
                    placeholder="CPF"
                />

                <Input 
                    placeholder="Telefone"
                />

                <Input 
                    placeholder="Senha"
                    secureTextEntry={true}
                    onChangeText={setPassword}
                />

                <FieldCheck>
                  <SelectedTerms isActive={isActive} onPress={isActiveCheck}>
                    <IconSelected 
                      name="check"
                    />
                  </SelectedTerms>
                  
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
      </Content>  
    </Container>
  );
}