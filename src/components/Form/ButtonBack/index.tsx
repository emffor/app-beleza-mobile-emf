import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import ChevronBackSvg from '../../../assets/chevron-back.svg';

import { Container, Title } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
}

export function ButtonBack({ title, ...rest }: Props) {
  return (
    <Container activeOpacity={0.8} {...rest}>
      <ChevronBackSvg 
        width={17}
        height={17}
        style={{ paddingRight: 46 }}
      />

      <Title>{title}</Title>
    </Container>
  );
}
