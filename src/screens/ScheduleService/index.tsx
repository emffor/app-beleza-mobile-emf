import React from 'react';
import { Button } from '../../components/Form/Button';
import { ButtonBack } from '../../components/Form/ButtonBack';

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
  HourValue,
  TimeAfternoon,
  TimeEvening,
  Time,
  Footer
} from './styles';

export function ScheduleService(){
  return (
    <Container>
      <Content>
      <Header>
        <ButtonBack 
            onPress={() => {}}
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
            <HourValue><Time>12:00</Time></HourValue>
            <HourValue><Time>12:00</Time></HourValue>
            <HourValue><Time>12:00</Time></HourValue>
            <HourValue><Time>12:00</Time></HourValue>
            <HourValue><Time>12:00</Time></HourValue>
          </TimeMorning>

          <TimeAfternoon>
            <HourValue><Time>12:00</Time></HourValue>
            <HourValue><Time>12:00</Time></HourValue>
            <HourValue><Time>12:00</Time></HourValue>
            <HourValue><Time>12:00</Time></HourValue>
            <HourValue><Time>12:00</Time></HourValue>
          </TimeAfternoon>

          <TimeEvening>
            <HourValue><Time>12:00</Time></HourValue>
            <HourValue><Time>12:00</Time></HourValue>
            <HourValue><Time>12:00</Time></HourValue>
            <HourValue><Time>12:00</Time></HourValue>
            <HourValue><Time>12:00</Time></HourValue>
          </TimeEvening>

        </SchedulingTime>
        
      </Content>

        <Footer>
          <Button 
                title="Cadastrar"
                onPress={() => {}}
            />
        </Footer>   
    </Container>
  );
}