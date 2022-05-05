import React from 'react';
import { useTheme } from 'styled-components';
import { CategoryCard } from '../../components/CategoryCard';
import { services } from '../../utils/services';

import {
    Container,
    Header,
    FieldInput,
    Icon,
    Input,
    Services,
    ScrollServices,
    TitleServices
  } from './styles';

export function SearchCategory(){
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

    <TitleServices>
        Resultados encontrados
    </TitleServices>
    

    <Services>
       <ScrollServices>
          { 
            services.map(item => (
              <CategoryCard key={ item.id} data={item}/>
            ))
          }
       </ScrollServices>
    </Services>
</Container>
  );
}