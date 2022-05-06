import React from 'react';
import { useTheme } from 'styled-components';
import { CategoryCard } from '../../components/CategoryCard';
import { HighlightCardCategory } from '../../components/HighlightCardCategory';
import { category } from '../../utils/category';
import { services } from '../../utils/services';

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
                      <HighlightCardCategory 
                        key={item.id} 
                        data={item} 
                      />
                    ))
                }
            </ScrollCategory>
        </Category>

            <TitleServices>Todos Serviços</TitleServices>
        <Services>

        <ScrollServices>
              { 
                services.map(item => (
                  <CategoryCard 
                    key={item.id} 
                    data={item}
                  />
                ))
              }
        </ScrollServices>
        </Services>
    </Container>
  );
}