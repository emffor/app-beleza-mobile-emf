import React, { useState, useEffect } from 'react';
import { ButtonLogout } from '../../components/Form/ButtonLogout';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

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

export type DescriptionProps = {
  id: string;
  photo: string;
  title: string;
  price: number;
}


export function Home(){
  
const [ products, setProducts ] = useState<DescriptionProps[]>([]);

  useEffect(() => {
    firestore()
    .collection('products')
    .get()
    .then(async response => {
        const data = await response.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        }) as DescriptionProps[];
        setProducts(data);
    })
    .catch(error => console.error(error));
  },[]);  


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
                data={products}
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
                data={products}
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
                data={products}
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
                data={products}
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