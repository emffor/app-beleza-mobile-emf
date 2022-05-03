import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { 
    Container,
    Icon
 } from './styles';
 
import { useTheme } from 'styled-components';

type Props = TouchableOpacityProps & {
  icon: string;
}

export function ButtonLogout({ icon, ...rest }: Props) {

    const theme = useTheme();

  return (
    <Container
      {...rest}
    >
      <Icon 
        name={icon}
        />
    </Container>
  );
}