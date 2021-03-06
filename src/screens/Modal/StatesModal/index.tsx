import React from 'react';
import { FlatList, TouchableOpacityProps } from 'react-native';
import { states } from '../../../utils/abnt';

import {
  Container,
  Content,
  Header,
  Title,
  Field,
  LabelStates,
  Footer,
} from './styles';

interface States {
    id: string;
    name: string;
    state: string;
}

export interface Props extends TouchableOpacityProps {
  state: string;
  setStates: (state: States) => void;
  closeSelectModal: () => void;
}

export function StatesModal({ 
    state, 
    closeSelectModal,
    setStates,
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
                <Field
                  onPress={closeSelectModal}
                >
                    <LabelStates>
                      {item.name} - {item.state}
                    </LabelStates>
                </Field>
                )}
             />   
           
        </Content>

            <Footer>
            </Footer>
    </Container>
  );
}