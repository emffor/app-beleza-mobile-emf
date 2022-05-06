import React from 'react';
import { TouchableOpacityProps } from 'react-native';


import {
  Container,
  Content,
  Header,
  Title,
  Footer,
  ButtonClose,
  IconButton,
  SubTitle
} from './styles';

interface Confirmation {
    id: string;
    name: string;
}

export interface Props extends TouchableOpacityProps {
  setConfirmation: (confirm: Confirmation) => void;
  closeSelectModal: () => void;
}

export function ConfirmationMessageModal({ 
    closeSelectModal,
    setConfirmation
}: Props) {
  return (
    <Container>
        <Content>
          <Header>
            <Title>
                Obrigado!!!
            </Title>

            <SubTitle>
                Parabéns, seu pagamento foi efetuado com sucesso. 
            </SubTitle>
          </Header>    
 
           
            <Footer>
                <ButtonClose
                    onPress={closeSelectModal}
                    >
                    <IconButton 
                        name="close"
                    />
                </ButtonClose>
            </Footer>
        </Content>
    </Container>
  );
}