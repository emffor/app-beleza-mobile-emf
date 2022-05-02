import React from 'react';
import { ButtonBack } from '../../components/Form/ButtonBack';
import { Input } from '../../components/Form/input';

import {
  Container,
  Header,
  Fields,
  Footer,
} from './styles';

export function RegistrationData(){
  return (
    <Container>
           <Header>
                <ButtonBack 
                    title="Fazer cadastro"
                />      
            </Header>

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
                
            </Fields>

            <Footer>
                
            </Footer>  
    </Container>
  );
}