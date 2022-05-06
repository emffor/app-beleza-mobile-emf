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
  HighlightCards,
  TitleCategory,
  FieldCategory,
  TopDetails,
  TitleHeader
} from './styles';


import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { HighlightCard } from '../../components/HighlightCard';

import CashBackSvg from '../../assets/HighlightCard/cashback.svg';
import SaleOffSvg from '../../assets/HighlightCard/saleoff.svg';

import { CategoryCard } from '../../components/CategoryCard';
import { FlatList } from 'react-native';


export function Home(){
  const category = [
    {
      id: '12346',
      photo: 'https://novacosmeticos.com/uploads/images/2018/09/maos-e-pes-1538050842.png',
      title: 'Pés e Mãos',
      price: 20
    },
    {
      id: '12347',
      photo: 'https://novacosmeticos.com/uploads/images/2018/09/maos-e-pes-1538050842.png',
      title: 'Mãos',
      price: 12
    },
    {
      id: '12348',
      photo: 'https://novacosmeticos.com/uploads/images/2018/09/maos-e-pes-1538050842.png',
      title: 'Pés',
      price: 15
    },
    {
      id: '12310',
      photo: 'https://novacosmeticos.com/uploads/images/2018/09/maos-e-pes-1538050842.png',
      title: 'Pintar Unhas',
      price: 26
    },
  ]

  function handleLogout(){
    auth().signOut();
  }

  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const handleScheduleService = () => {
    navigation.navigate('ScheduleService');
  }

  return (
    <Container>
        <Header>
          <HeaderContent>
            <TopDetails>
              <TitleHeader>
                  <Title>Olá, José</Title>

                  <Subtitle>
                    Onde será seu atendimento hoje?
                  </Subtitle>

                </TitleHeader>

                  <ButtonLogout 
                    onPress={handleLogout}
                    icon="logout"
                  />
            </TopDetails>
            
            <Localization 
              onPress={() => {}}
            >
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


        <FieldCategory>
          <TitleCategory>Unhas</TitleCategory>
            <FlatList 
                data={category}
                style={{flex: 1, width: '100%', marginTop: 36, marginBottom: 36}}     
                horizontal={true}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                  <CategoryCard 
                    data={item}
                    onPress={handleScheduleService}
                  />
                )}   
            />    
        </FieldCategory>

        <FieldCategory>
          <TitleCategory>Cabelo</TitleCategory>
            <FlatList 
                data={category}
                style={{flex: 1, width: '100%',marginTop: 36, marginBottom: 36}}
                horizontal={true}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                  <CategoryCard 
                    data={item}
                    onPress={handleScheduleService}
                  />
                )}   
            />    
        </FieldCategory>

        <FieldCategory>
          <TitleCategory>Depilação</TitleCategory>
            <FlatList 
                data={category}
                style={{flex: 1, width: '100%',marginTop: 36, marginBottom: 36}}
                horizontal={true}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                  <CategoryCard 
                    data={item}
                    onPress={handleScheduleService}
                  />
                )}   
            />    
        </FieldCategory>

        <FieldCategory>
          <TitleCategory>Massagem</TitleCategory>
            <FlatList 
                data={category}
                style={{flex: 1, width: '100%',marginTop: 36, marginBottom: 36}}
                horizontal={true}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                  <CategoryCard 
                    data={item}
                    onPress={handleScheduleService}
                  />
                )}   
            />    
        </FieldCategory>





    </Container>
  );
}