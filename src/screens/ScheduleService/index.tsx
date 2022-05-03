import React from 'react';
import { Calendar } from '../../components/Calendar';
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
          <DateInfo>
            <DateValue selected={false}>18</DateValue>
            <DateTitle selected={false}>Terça</DateTitle>
          </DateInfo>
        </ServicePeriod>

        <Calendar />



        </Header>
      </Content>
    </Container>
  );
}