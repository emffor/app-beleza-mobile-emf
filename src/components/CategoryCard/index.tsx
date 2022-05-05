import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ServicesDTO } from '../../dtos/ServicesDTO';

import {
  Container,
  Details,
  LogoImage,
  Title,
  Price,
  FieldButton,
  TextButton,
  TextPrice,
  Button
} from './styles';

interface Props extends TouchableOpacityProps {
  data: ServicesDTO;
}

export function CategoryCard({ data, ...rest }: Props) {


  return (
    <Container>

      <LogoImage
        source={{ uri: data.photo }}
        
      />  

      <Details>
        <Title>{data.title}</Title>
        
        <TextPrice>A Partir de <Price>{'\n'}R$ {(data.price.toFixed(2))}</Price></TextPrice>
      </Details>


      <FieldButton {...rest}>
        <Button {...rest}>
            <TextButton>
              Conheça
            </TextButton>
        </Button>
      </FieldButton>
    </Container>
  );
}
