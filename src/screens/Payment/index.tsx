import React, { useState } from 'react';
import { Modal, FlatList } from 'react-native';
import { Card } from '../../components/Card';
import { Button } from '../../components/Form/Button';
import { cards } from '../../utils/cards';
import { PortionSelectedModal } from '../PortionSelectedModal';

import {
  Container,
  Gradient,
  Content,
  FieldButtonBack,
  ButtonBack,
  FieldIcon,
  Icon,
  TextButtonBack,
  Header,
  Title,
  FieldTitle,
  FieldDate,
  DateDate,
  Address,
  AddressTitle,
  AddressText,
  Price,
  ContentCard,
  ContentTitleCard,
  TitleCard,
  AddButton,
  TitleAddButton,
  FieldCards,
  Cards,
  ContentHeader,
  Footer,
  FieldPrice,
  PriceButton,
  TitlePrice,
  FieldButtonPrice,
  ModalField,
  PortionSelected,
  PortionSelectedTitle,
  PortionSelectedIcon,
  FieldPortion
} from './styles';

export function Payment(){
  const [ selectedCard, setSelectedCard ] = useState(false);
  const [ modalVisible, setModalVisible ] = useState(false);

  function handleSelectCard(){
    selectedCard === false ? setSelectedCard(true) : setSelectedCard(false);
  }

  function handleOpenSelectModal(){
    setModalVisible(true);
  }

  function handleCloseSelectModal(){
    setModalVisible(false);
  }

  return (
    <Container>
      <Gradient>
        <Content>

          <FieldButtonBack>
            <ButtonBack>
              <FieldIcon>
                <Icon 
                  name="chevron-left"
                />
              </FieldIcon>
            </ButtonBack>

                <TextButtonBack>Pagamento</TextButtonBack> 
            </FieldButtonBack>  

            <ContentHeader>
              <Header>
                  <FieldTitle>
                    <Title>Nome de serviço grande e longo</Title>
                  </FieldTitle>

                  <FieldDate>
                    <DateDate>Terça feira 10/04/22 as 21:00h</DateDate>
                  </FieldDate>

                  <Address>
                    <AddressTitle>No endereço</AddressTitle>
                    <AddressText>Av Miguel Castro, 600, Lagoa Nova</AddressText>
                  </Address>

                  <Price>R$ 29,90</Price>
              </Header>
            </ContentHeader>

          <ContentCard>  

                <ContentTitleCard>
                  <TitleCard>Escolha o cartão</TitleCard>

                  <AddButton>
                    <TitleAddButton>+ Adicionar</TitleAddButton>
                    </AddButton>
                </ContentTitleCard>

            <FieldPortion>
                <PortionSelected
                  onPress={handleOpenSelectModal}
                >
                    <PortionSelectedTitle>
                        Parcelamento em 1x sem juros
                      </PortionSelectedTitle>

                      <PortionSelectedIcon
                        name="chevron-down"
                      />
                </PortionSelected>
              </FieldPortion>

            <Modal
              visible={modalVisible} 
              animationType='fade'
              transparent={true}
              style={{marginTop: '50%'}}
            >
              <ModalField>

                <PortionSelectedModal 
                    closeSelectModal={handleCloseSelectModal}
                />
              </ModalField>

            </Modal>

            <FieldCards>
                <Cards>             
                   <FlatList 
                       data={cards}
                       keyExtractor={(item) => String(item.id)}
                       renderItem={({ item }) => (
                        <Card 
                            isActive={selectedCard}
                            selectCard={handleSelectCard}
                            nameCard = {item.name}
                            numberCard = {item.number}
                        />
                       )}      
                    />
                </Cards>
     
            </FieldCards>   

              <Footer>
                  <FieldPrice>
                        <PriceButton>R$ 29,90</PriceButton>
                        <TitlePrice>Total a pagar</TitlePrice>
                    </FieldPrice>
                  
                    <FieldButtonPrice>
                      <Button 
                        title="Pagar"
                      />
                    </FieldButtonPrice>
                </Footer>

          </ContentCard>
       </Content>         
      </Gradient>
    </Container>
  );
}