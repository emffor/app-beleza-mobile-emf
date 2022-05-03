import React from 'react';
import { SvgProps } from 'react-native-svg';

import { 
  Container,
  Header,
 } from './styles';

 interface Props {
  icon: React.FC<SvgProps>
 }

export function HighlightCard({ 
   icon: Icon, 
}: Props){
  return (
    <Container>
       <Header>
         <Icon 
            width={238} height={158}
         />
       </Header>
    </Container>
  );
}