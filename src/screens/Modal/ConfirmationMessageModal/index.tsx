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
                Titulo da mensagem
            </Title>

            <SubTitle>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam vitae sequi hic a aut. Sed blanditiis illo ea deserunt deleniti?  
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