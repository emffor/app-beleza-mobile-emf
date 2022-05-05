import React from 'react';
import { CategoryDTO } from '../../dtos/CategoryDTO';
import { TouchableOpacityProps } from 'react-native';

import {
    Container,
    Details,
    LogoImage,
    Title,
    TextPrice,
  } from './styles';
  
  interface Props extends TouchableOpacityProps {
    data: CategoryDTO;
  }

export function HighlightCardCategory({ data, ...rest }: Props){
   return (
    <Container {...rest}>

      <LogoImage
        source={{ uri: data.photo }}
      />  

      <Details>
        <Title>{data.title}</Title>
        <TextPrice>+ {data.services} serviços</TextPrice>
      </Details>
    </Container>
   );
 }