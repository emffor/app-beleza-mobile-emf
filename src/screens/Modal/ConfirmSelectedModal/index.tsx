import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Button } from '../../../components/Form/Button';

import {
  Container,
  Content,
  Header,
  Title,
  SubTitle,
  Bold,
  Field,
  Label,
  LabelPrice,
  Footer,
  ButtonClose,
  TextButton,
  FieldButton
} from './styles';

export interface Props extends TouchableOpacityProps {
  date: string;
  time: string;
  price: number;
  closeSelectModal: () => void;
}

export function ConfirmSelectedModal({ 
  date, 
  time,
  price,
  closeSelectModal,
}: Props) {
  const navigation = useNavigation();

  function HandlePayment(){
    navigation.navigate('Payment');
  }

  return (
    <Container>
        <Content>
          <Header>
            <Title>Confirmar escolha de horário</Title>
            <SubTitle>
                Confirma que a profissional poderá te atender no dia  
                <Bold> {date}</Bold> as <Bold>{time}h </Bold>?
            </SubTitle>
          </Header>

            <Field>
                <Label>Agendamento flexível</Label>
                <LabelPrice>R$ {price}</LabelPrice>
            </Field>
            
            <Footer>
                <ButtonClose
                  onPress={closeSelectModal}
                >
                  <TextButton>Não, desejo voltar</TextButton>
                </ButtonClose>

                <FieldButton>
                  <Button
                      title='Sim, continuar'
                      onPress={HandlePayment}
                  />
                </FieldButton>
            </Footer>
        </Content>
    </Container>
  );
}