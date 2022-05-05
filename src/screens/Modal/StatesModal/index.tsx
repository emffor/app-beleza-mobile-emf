import React from 'react';
import { FlatList, TouchableOpacityProps } from 'react-native';
import { states } from '../../../utils/states';

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

interface States {
    id: string;
    name: string;
}

export interface Props extends TouchableOpacityProps {
  state: string;
  setStates: (state: States) => void;
  closeSelectModal: () => void;
}

export function StatesModal({ 
    state, 
    closeSelectModal,
}: Props) {
  return (
    <Container>
        <Content>
          <Header>
            <Title>Estados</Title>
          </Header>    
             <FlatList 
                data={states}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                <Field>
                    <LabelPrice>
                        {item.state}
                    </LabelPrice>
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