import React from 'react';
import { ButtonLogout } from '../../components/Form/ButtonLogout';

import auth from '@react-native-firebase/auth';
import {
  Container,
  Header,
  HeaderContent,
  Title,
  Subtitle,
  Localization,
  Address,
  Icon,
  HighlightCards
} from './styles';


import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { HighlightCard } from '../../components/HighlightCard';

import CashBackSvg from '../../assets/cashback.svg';
import SaleOffSvg from '../../assets/saleoff.svg';


export function Home(){

  function handleLogout(){
    auth().signOut();
  }

  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const handleNextPage = () => {
    navigation.navigate('Schedule');
  }

  return (
    <Container>
        <Header>
          <HeaderContent>
            <Title>Olá, José</Title>
            <Subtitle>Onde será seu atendimento hoje?</Subtitle>


            <Localization>
                <Address>Avenida Miguel Castro, 600</Address>
                <Icon 
                  name="chevron-right"
                />
            </Localization>
          </HeaderContent>
        </Header>


        <HighlightCards>
            <HighlightCard 
              icon={CashBackSvg}
            />
            <HighlightCard 
              icon={SaleOffSvg}
            />
            <HighlightCard 
              icon={CashBackSvg}
            />
            <HighlightCard 
              icon={CashBackSvg}
            />
            <HighlightCard 
              icon={SaleOffSvg}
            />
            <HighlightCard 
              icon={CashBackSvg}
            />
        </HighlightCards>







    </Container>
  );
}