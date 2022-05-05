import React from 'react';
import { FlatList, TouchableOpacityProps } from 'react-native';
import { Button } from '../../../components/Form/Button';
import { portions } from '../../../utils/portions';

import {
  Container,
  Content,
  Header,
  Title,
  Field,
  LabelPrice,
  Footer,
  ButtonClose,
  TextButton,
} from './styles';

interface Portion {
    id: string;
    name: string;
}

export interface Props extends TouchableOpacityProps {
  portion: string;
  setPortion: (portion: Portion) => void;
  closeSelectModal: () => void;
}

export function PortionSelectedModal({ 
    portion, 
    closeSelectModal,
}: Props) {
  return (
    <Container>
        <Content>
          <Header>
            <Title>Selecione a forma de parcela</Title>
          </Header>    
             <FlatList 
                data={portions}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item}) => (
                <Field>
                    <LabelPrice>Parcelamento em {item.name} sem juros</LabelPrice>
                </Field>
                )}
             />   
           
            <Footer>
                <ButtonClose
                    onPress={closeSelectModal}
                    >
                    <TextButton>Selecionar</TextButton>
                </ButtonClose>
            </Footer>
        </Content>
    </Container>
  );
}