import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Modal } from 'react-native';
import { Button } from '../../components/Form/Button';
import { ButtonBack } from '../../components/Form/ButtonBack';
import { ButtonTime } from '../../components/Form/ButtonTime';

import { ConfirmSelectedModal } from '../Modal/ConfirmSelectedModal';

import {
  Container,
  Content,
  Header,
  ServiceTitle,
  ServicePeriod,
  DateInfo,
  DateTitle,
  DateValue,
  DatePast,
  DateFuture,
  FieldMessage,
  Message,
  Description,
  PeriodDay,
  NameDay,
  SchedulingTime,
  TimeMorning,
  TimeAfternoon,
  TimeEvening,
  Footer,
  ModalField
} from './styles';

export function ScheduleService(){
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  function handleCloseSelectModal() {
    setModalVisible(false);
  }

  function handleOpenSelectModal() {
    setModalVisible(true);
  }

  function handleBackClick() {
    navigation.goBack();
  }

  return (
    <Container>
      <Content>
      <Header>
        <ButtonBack 
            onPress={handleBackClick}
            title='Agendar serviço'
          />

        <ServiceTitle>
            Nome de serviço grande e longo
        </ServiceTitle>
        

        <ServicePeriod>
          <DatePast>22    23    24</DatePast>

              <DateInfo>
                <DateValue>25</DateValue>
                <DateTitle>Terça</DateTitle>
              </DateInfo>

            <DateFuture>26    27    28</DateFuture>
          
        </ServicePeriod>

        <FieldMessage>
          <Message>
              Este serviço dura em média XX horas e a atendente irá escolher algum dos horários que você selecionar
            </Message>
        </FieldMessage>

        <Description>
            Quais horários você está disponível para receber a profissional?
        </Description>


        </Header>

        <PeriodDay>
          <NameDay>Manhã</NameDay>
          <NameDay>Tarde</NameDay>
          <NameDay>Noite</NameDay>
        </PeriodDay>

        <SchedulingTime>
          <TimeMorning>
              <ButtonTime time='08:00' status='waiting'/>
              <ButtonTime time='09:00' status='waiting'/>
              <ButtonTime time='10:00' status='disabled'/>
              <ButtonTime time='11:00' status='disabled'/>
              <ButtonTime time='12:00' status='waiting'/>
          </TimeMorning>

          <TimeAfternoon>
              <ButtonTime time='13:00' status='waiting'/>
              <ButtonTime time='14:00' status='active'/>
              <ButtonTime time='15:00' status='disabled'/>
              <ButtonTime time='16:00' status='waiting'/>
              <ButtonTime time='17:00' status='waiting'/>
          </TimeAfternoon>
              
          <TimeEvening>
              <ButtonTime time='18:00' status='waiting'/>
              <ButtonTime time='19:00' status='waiting'/>
              <ButtonTime time='20:00' status='waiting'/>
              <ButtonTime time='21:00' status='disabled'/>
              <ButtonTime time='22:00' status='disabled'/>
          </TimeEvening>
                
        </SchedulingTime>
        
      </Content>

      <Modal 
        visible={modalVisible} 
        animationType='fade'
        transparent={true}
        style={{marginTop: '50%'}}
      > 
      <ModalField>
        <ConfirmSelectedModal 
            date='12/04/2022'
            time='12:00'
            price={10}
            closeSelectModal={handleCloseSelectModal}
        />
      </ModalField>
      </Modal>

        <Footer>
          <Button 
                title="Cadastrar"
                onPress={handleOpenSelectModal}
            />
        </Footer>   
    </Container>
  );
}