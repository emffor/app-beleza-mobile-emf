import React from 'react';
import { FlatList, ScrollView } from 'react-native';
import { useTheme } from 'styled-components';
import { CategoryCard } from '../../components/CategoryCard';
import { HighlightCardCategory } from '../../components/HighlightCardCategory';

import {
  Container,
  Header,
  FieldInput,
  Icon,
  Input,
  Category,
  TitleCategory,
  TitleServices,
  Services,
  ScrollServices,
  ScrollCategory
} from './styles';


export function Search(){
    const theme = useTheme();

    const category = [
        {
          id: '12346',
          photo: 'https://novacosmeticos.com/uploads/images/2018/09/maos-e-pes-1538050842.png',
          title: 'Pés e Mãos',
          services: 20
        },
        {
          id: '12347',
          photo: 'https://novacosmeticos.com/uploads/images/2018/09/maos-e-pes-1538050842.png',
          title: 'Mãos',
          services: 10
        },
        {
          id: '12348',
          photo: 'https://novacosmeticos.com/uploads/images/2018/09/maos-e-pes-1538050842.png',
          title: 'Pés',
          services: 50
        },
        {
          id: '12310',
          photo: 'https://novacosmeticos.com/uploads/images/2018/09/maos-e-pes-1538050842.png',
          title: 'Pintar Unhas',
          services: 40
        },
      ]

    const services = [
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
  return (
    <Container>
        <Header>
            <FieldInput>
                <Icon name="search1"/>
                <Input 
                    placeholder="O que você está buscando?" placeholderTextColor={theme.colors.shape}
                />
            </FieldInput>
        </Header>

            <TitleCategory>Categorias</TitleCategory>
        <Category>
            <ScrollCategory>
                { 
                    category.map(item => (
                    <HighlightCardCategory data={item} />
                    ))
                }
            </ScrollCategory>
        </Category>

            <TitleServices>Todos Serviços</TitleServices>
        <Services>

        <ScrollServices>
              { 
                services.map(item => (
                  <CategoryCard data={item}/>
                ))
              }
        </ScrollServices>

        </Services>
    </Container>
  );
}