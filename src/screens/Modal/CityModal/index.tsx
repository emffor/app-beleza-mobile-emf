import React from 'react';
import { FlatList, TouchableOpacityProps } from 'react-native';
import { city } from '../../../utils/abnt';

import {
  Container,
  Content,
  Header,
  Title,
  Field,
  LabelCity,
  Footer,
} from './styles';

interface City {
    id: string;
    name: string;
    state: string;
}

export interface Props extends TouchableOpacityProps {
  name: string;
  setCity: (name: City) => void;
  closeSelectModal: () => void;
}

export function CityModal({ 
    name,
    closeSelectModal,
    setCity,
}: Props) {
  return (
    <Container>
        <Content>
          <Header>
            <Title>Estados</Title>
          </Header>    
             <FlatList 
                data={city}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                <Field
                  onPress={closeSelectModal}
                >
                    <LabelCity>
                      {item.name} - {item.state}
                    </LabelCity>
                </Field>
                )}
             />   
           
        </Content>

            <Footer>
            </Footer>
    </Container>
  );
}