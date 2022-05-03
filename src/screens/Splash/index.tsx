import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import LogoBelezaSvg from '../../assets/logobelleza.svg';
import LogoShopSvg from '../../assets/logoshop.svg';
import { Button } from '../../components/Form/Button';

import { ParamListBase, NavigationProp, useNavigation } from '@react-navigation/native';

import {
  Container,
  HeaderContent,
  Title,
  SubTitle,
  Footer,
  TitleRegister,
  Form,
  FieldTitle,
  ButtonRegister,

} from './styles';

export function Splash(){
  const navigation = useNavigation();

  const handleNextPage = () => {
    navigation.navigate('SignIn');
  }

  const handleGoBAck = () => {
    navigation.goBack();
    
  }

  return (
    <Container>
      <HeaderContent>

        <LogoBelezaSvg 
          width={RFValue(145)}
          height={RFValue(115)}
        />

        <LogoShopSvg 
          width={RFValue(450)}
          height={RFValue(243)}
          viewBox="120 35 480 430"
        />
       
      </HeaderContent>

      <Form>
        <FieldTitle>

            <Title>Inspiração que aproximá</Title>

            <SubTitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales est enim, id{'\n'}luctus dui dignissim nec
            </SubTitle>
            
        </FieldTitle>
          

            <Footer>
              <Button 
                title="Entrar"
                onPress={handleNextPage}
              />

              <ButtonRegister
                onPress={() => {}}
              >
                <TitleRegister>Fazer Cadastro</TitleRegister>
              </ButtonRegister>
            </Footer>
      </Form>

      
    </Container>
  );
}